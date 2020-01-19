const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api'); //index.js
const usersRouter = require('./routes/api/users'); //index.js

const app = express();

//load custom environment variable
dotenv.config();

//establish connection to Mongo
mongoose.connect(
  // 'mongodb://localhost/assignment', { useNewUrlParser: true, useUnifiedTopology: true })
  process.env.MONGO_URI,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true, //
    useFindAndModify: false //
  })
  .then(() => console.log('Connected to Mongo...'))
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//cors
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/api/users', usersRouter);

if(process.env.NODE_ENV === 'production'){
  app.get('*', (req,res) =>{
     res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
