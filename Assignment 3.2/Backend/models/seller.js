const mongoose = require('../config/db');

var sellerSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    address: String,
    contact_no: Number,
    email: String,
    products: {},
});

var sellerModel = mongoose.model('Seller', sellerSchema, 'Sellers');

module.exports = sellerModel;