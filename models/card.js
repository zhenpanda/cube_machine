'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Card Schema

var cardSchema = new Schema({
    name: String
});

var Card = mongoose.model('Card', cardSchema);
module.exports = Card;