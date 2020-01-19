const express = require('express');
const router = express.Router();
const Users = require('../../../models/users');
const Login = require('../../../models/login');
const mongoose = require('mongoose');
const validateLogin = require('../../../joi/validate_login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//Login
router.post('/', (req, res) => {
  let login = new Login(req.body);
  const { error } = validateLogin(login);

  if(error) {
    return res.status(400).send(error.message);
  } else {
    Users.findOne({ email: login.email }, (err, user) => {
      if(err) {
        return res.status(400).send(err.message);
      } else if(!user) {
        return res.status(401).send('cannot find user');
      } else {
        //login
        bcrypt.compare(login.password, user.password, (err, match) => {
          if(!match) return res.status(401).send('wrong password');
          jwt.sign({ email: login.email }, process.env.JWT_SECRET, (err, token) => {
            if(err) return res.status(400).send(err.message);
            //set a dummy response header
            res.header('Access-Control-Expose-Headers', '*');
            res.header('x-auth-token', token);
            res.status(200).send('Login succees');
          });
        });
      }
    });
  }
});

module.exports = router;