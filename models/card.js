'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Card Schema

var cardSchema = new Schema({
    cardName: String,
    manaEfficiency: Number,
    manaDevelopment: Number,
    manaAccessibility: Number,
    disparityGap: Number,
    disruptionLevel: Number,
    dependencyLevel: Number,
    winContribution: Number,
    synergeticEffect: Number,
    dividendEffect: Number,
    gamestateInevitability: Number
});

var Card = mongoose.model('Card', cardSchema);
module.exports = Card;