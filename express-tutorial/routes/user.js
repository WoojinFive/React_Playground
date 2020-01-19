const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('Received a GET request, param: ' + req.params.id);
});

// router.post('/', (req, res) => {
//   res.json({ success: true })
// });
router.post('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.json({
    sucess: true,
    user: req.body.username
  });
});


router.put('/', (req, res) => {
  res.status(400).json({ message: 'Hey, you. Bad Request!' });
});

router.delete('/', (req, res) => {
  res.send('Received a DELETE request');
});

module.exports = router;