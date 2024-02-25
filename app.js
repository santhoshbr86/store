var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
require("dotenv").config();

const storage = multer.diskStorage({    
  destination:(req,file,callback) => {  
      callback(null, 'uploads')
  },
  filename:(req,file, callback) => {
    callback(null, `${file.originalname}`);
  }
});

let upload = multer({storage:storage});

const cors = require('cors');
const connectDB = require('./connect');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');  
const orderRouter = require('./routes/order');

var app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
connectDB();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public/store-app')));
app.use('/uploads', express.static('uploads'));
app.use(cors({
  origin: '*'
}));

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.post('/api/upload', upload.single('file'), (req, res, next) => {
  try {
      let file = req.file;
      console.log("File uploaded: ", file.originalname);  
      res.status(200).json({status: 'file uploaded'});
  }
  catch(error) {
      res.status(500).json({error});
  }
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
