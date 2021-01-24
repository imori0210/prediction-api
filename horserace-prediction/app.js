var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');

var indexRouter = require('./routes/index');
var testTest = require('./routes/test/test');
var usersRouter = require('./routes/users');
var testTest1 = require('./routes/test/test1');
const annotation = require('./routes/trackbias/v1/annotation');

var app = express();

const swOptions = {
  swaggerDefinition: {
    info: {
      title: 'API',
      version: '1.0.0'
    },
  },
  apis: ['./routes/test/test1.js', './routes/trackbias/v1/annotation.js'],
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test/test', testTest);
app.use('/users', usersRouter);
app.use('/test/test1', testTest1);
app.use('/trackbias/v1/annotation', annotation);
app.use('/spec', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swOptions)));

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
