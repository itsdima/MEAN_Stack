const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    Name: {type: String, required: true, minlength: 3, maxlength: 255}},
    {timestamps: true});