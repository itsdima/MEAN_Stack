const mongoose = require('mongoose');
const AuthorSchema = require('../models/model');
mongoose.model('Author', AuthorSchema);