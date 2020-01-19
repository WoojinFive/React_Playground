const express = require('express');
const router = express.Router();
const Contact = require('../../models/contact.js');
const mongoose = require('mongoose');
const validateContact = require('../../joi/validate_contact');
const validateToken = require('../../Middleware/validate_token');

//GET ALL CONTACTS
router.get('/', (req, res) => { //removed validateToken for testing
  //retriee all songs from the Mongo db
  console.log(req.headers);
  // console.log(res.header);
  Contact.find({} , (err, contacts) => {
    if(err) return res.status(400).send('Error');

    res.send(contacts);
    
  }).sort({'index': 'desc'});
});

//GET ONE CONTACT
// router.get('/:index', (req, res) => {
//   //retrieve one contact from the Mongo db
//   Contact.findById(req.params.index, (err, contact) => {
//     if(err) return res.status(400).send('Error');
//     if(!contact) return res.status(404).send();
    
//     res.send(contact);
//   });
// });
router.get('/:index', (req, res) => { //validateToken, 
  //retrieve one contact from the Mongo db
  Contact.find({ index: req.params.index }, (err, contact) => {
    if(err) {
      console.log(err);
      return res.status(400).send('Error');
    }
    if(!contact) {
      return res.status(404).send();
    }
    if(contact.length === 0) {
      return res.send(['noexist', 'There is no data has index number ' + req.params.index]);
    }
    res.send(contact);
  });
});

//CREATE CONTACT
router.post('/', (req, res) => {
  //create new contact
  const contact = new Contact(req.body);
  const { error } = validateContact(contact);
  if(error) {
    return res.status(400).send(error.message);
  } else {
    contact.save((err, result) => {
      if(err) {
        console.log(err.message)
        return res.status(400).send(err.message);
      }
      res.status(200).send(result);
    });
  }
});

//UPDATE CONTACT
router.put('/:index', (req, res) => {
  const contact = new Contact(req.body);
  const { error } = validateContact(contact);
  if(error) {
    return res.status(400).send(error.message);
  } else {
    Contact.findOneAndUpdate({index: req.params.index}, req.body, {runValidators: true}, (err, contact) => {
      if(err) return res.status(400).send(err.message);
      if(!contact) return res.status(404).send();

      res.status(200).send(contact);
    });
  }
});

//DELETE CONTACT
router.delete('/:index', (req, res) => {
  //delete one contact from the Mongo db
  Contact.findOneAndDelete({index: req.params.index}, (err, contact) => {
    if(err) return res.status(400).send('Error');
    if(!contact) return res.status(404).send();

    res.status(200).send('Deleted');
  });
});

//SEARCH CONTACT
router.get('/search/:query', (req, res) => {
  const query = req.params.query;
  Contact.find({ 
    $or: [
      {"name.first": { $regex:  `(${query}+?)`, $options: 'i' }},
      {"name.last": { $regex:  `(${query}+?)`, $options: 'i' }},
      {email: {$regex: `(.${query}+?)`, $options: 'i'}},
      {relationship: {$regex: `(${query}+?)`, $options: 'i'}},
      {"address.building": { $regex:  `(${query}+?)`, $options: 'i' }},
      {"address.street": { $regex:  `(${query}+?)`, $options: 'i' }},
      {"address.city": { $regex:  `(${query}+?)`, $options: 'i' }},
      {"address.state": { $regex:  `(${query}+?)`, $options: 'i' }},
      {"address.country": { $regex:  `(${query}+?)`, $options: 'i' }},
      {"address.zip": { $regex:  `(${query}+?)`, $options: 'i' }},
    ]
   }, (err, result) => {
    if(err) throw err;
    if(result) {
      res.send(result);
    } else {
      res.send(JSON.stringify({
        error : 'Error'
      }));
    }
  }).sort({'index': 'desc'});

  // const query = req.params.query;
  // Contact.find({
  //   name: { first: query } 
    
  // }, (err, result) => {
  //   if(err) throw err;
  //   if(result) {
  //     res.json(result);
  //   } else {
  //     res.send(JSON.stringify({
  //       error : 'Error'
  //     }));
  //   }
  // })
})

module.exports = router;