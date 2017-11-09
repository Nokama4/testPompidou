
// Import
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');


// server
const app = express();
mongoose.connect('mongodb://localhost:auth/auth');
mongoose.Promise = global.Promise;

// MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  next();
});
router(app);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected');
});


// Start on :3000
const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Server listening to ${port}`);
