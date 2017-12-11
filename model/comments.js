// Mongo Schema lives here.

'use strict';

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var stockedSchema = new Schema({
  userName: String,
  name: String,
  description: String,
  pic: { data: buffer, contentType: String }
});

//export our module to use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);