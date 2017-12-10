//server.js
'use strict'

// Deps and Instances
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import from config file to hide password, etc.
const env = require('./env/config.js');

// DB config
var mongoDB = env.mLabURL;
mongoose.connect(mongoDB, { useMongoClient: true} )
var db = mongoose.connection;
db.on('error', console.error.bind( console, 'MongoDB connection error:' ) );

var app = express();
var router = express.Router();

// set Port
var port = process.env.API_PORT || 3001;

// body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
