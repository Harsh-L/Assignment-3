const mongoose = require('../config/db');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    address: String,
    contact_no: Number,
    email: String,
    cart: {},
});

var userModel = mongoose.model('User', userSchema, 'Users');

module.exports = userModel;