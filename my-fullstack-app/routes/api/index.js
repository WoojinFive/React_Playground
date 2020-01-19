const express = require('express');
const router = express.Router();
const contactsRouter = require('./contacts');

//hook up the songs router
router.use('/contacts', contactsRouter);

//api/
router.get('/', (req, res) => {
  res.send('Welcome to the API');
})




module.exports = router;