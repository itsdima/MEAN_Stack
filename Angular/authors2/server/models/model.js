const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    Name: {type: String, required: true, minlength: 3, maxlength: 255},
    quotes: [{
        quote: {type: String, required: true, minlength: 3},
        votes: {type: Number, default: 0}
    }]},
    {timestamps: true});