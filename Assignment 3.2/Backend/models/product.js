const mongoose = require('../config/db');

var productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    details: String,
    seller: String,
    images: String,
    rating: Number,
    ratingCount: Number,
});

var productModel = mongoose.model('Product', productSchema, 'Products');

module.exports = productModel;