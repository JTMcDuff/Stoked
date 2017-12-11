// Mongo Schema lives here.

'use strict';

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
// Might need to update pic at some point.
var stokedSchema = new Schema({
  name: String,
  description: String,
 // pic: { data: buffer, contentType: String }
});

module.exports = mongoose.model('stokedSchema', stokedSchema);