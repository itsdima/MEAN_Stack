const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Author = mongoose.model('Author');
mongoose.connect('mongodb://localhost/authors');
const moment = require('moment');

module.exports = {
    
}