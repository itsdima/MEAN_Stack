const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    title: {type: String, required: true, minlength: 4},
    price: {type: Number, required: true, minlength: 1},
    url: {type: String}},
    {timestamps: true}
);