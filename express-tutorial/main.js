const express = require('express');
const app = express();

const user = require('./routes/user');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// const myLogger = (req, res, next) => {
//   console.log(req.url);
//   next();
// };

// app.use(myLogger);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.use('/user', user);

app.listen(3000, () => {
  console.log('Example App is listening on port 3000');
});