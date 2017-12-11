//server.js
'use strict'

// Deps and Instances
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userProfile = require('./model/schema.js');


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

// Route path and API setup.
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

// Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

// /user route for posting and retrieving users
router.route('/user')
  // Updating get request later
  .get(function(req, res) {
  	// Check our schema
    userProfile.find( { name: req.headers.name+ '' }, function(err, user) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(user)
      console.log('responded to get request');
    });
  })

  // Post new user to DB
  .post(function(req, res) {
    var user = new userProfile();
    //body parser lets us use the req.body
    console.log('req.body.name?', req.body);
    user.name = req.body.name;
    user.description = req.body.description;
    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'User Saved' });
    });
  });
