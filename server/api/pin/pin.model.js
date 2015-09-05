'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PinSchema = new Schema({
  description: String,
  url: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Pin', PinSchema);
