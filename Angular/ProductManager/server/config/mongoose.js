const mongoose = require('mongoose');
const ProductSchema = require('../models/model');
mongoose.model('Product', ProductSchema);