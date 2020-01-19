const express = require('express');
const router = express.Router();
const Users = require('../../../models/users');
const mongoose = require('mongoose');
const validateUsers = require('../../../joi/validate_users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//CREATE USER
router.post('/', (req, res) => {
  //create new user
  let user = new Users(req.body);
  console.log(req.body);
  const { error } = validateUsers(user);
  console.log(user);
  if(error) {
    return res.status(400).send(error.message);
  } else {
     //register
    bcrypt.genSalt((err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        user.save((err, result) => {
          if(err) return res.status(400).send(err.message);
          let outputString = `[id] : ${result.id}, [email] : ${result.email} has been registed`;
          jwt.sign({ email: result.email }, process.env.JWT_SECRET, (err, token) => {
            if(err) return res.status(400).send(err.message);
            //set a dummy response header
            res.header('Access-Control-Expose-Headers', '*');
            res.header('x-auth-token', token);
            res.status(200).send(outputString);
          });
        });
      });
    });
  }
});

//UPDATE USER
router.put('/:id', (req, res) => {
  Users.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
    if(err) return res.status(400).send('Error');
    if(!user) return res.status(404).send();

    res.status(200).send(user);
  });
});

//DELETE USER
router.delete('/:id', (req, res) => {
  //delete one user from the Mongo db
  Users.findByIdAndDelete(req.params.id, (err, user) => {
    if(err) return res.status(400).send('Error');
    if(!user) return res.status(404).send();

    res.status(200).send('Deleted');
  });
});

module.exports = router;