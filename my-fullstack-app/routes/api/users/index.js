const express = require('express');
const router = express.Router();
const Users = require('../../../models/users');
const mongoose = require('mongoose');
const validateContact = require('../../../joi/validate_users');
const registerRouter = require('./register');
const loginRouter = require('./login');
const validateToken = require('../../../Middleware/validate_token');

//hook up the register router
router.use('/register', registerRouter);

//hook up the login router
router.use('/login', loginRouter);


//// GET ALL USERS
// router.get('/', (req, res) => {
//   //set a dummy response header
//   res.header('x-auth-token', 'abc123');
  
//   //retriee all songs from the Mongo db
//   Users.find({}, (err, users) => {
//     if(err) return res.status(400).send('Error');

//     res.send(users);
//   }).sort('index');
// });
//GET ALL USERS
router.get('/', (req, res) => { //validateToken, 
  //retriee all songs from the Mongo db
  Users.find({}, (err, users) => {
    if(err) return res.status(400).send('Error');

    res.send(users);
  }).sort('index');
});

//GET ONE USER
router.get('/:id', (req, res) => {
  //retrieve one user from the Mongo db
  Users.findById(req.params.id, (err, user) => {
    if(err) return res.status(400).send('Error');
    if(!user) return res.status(404).send();

    res.send(user);
  });
});

module.exports = router;