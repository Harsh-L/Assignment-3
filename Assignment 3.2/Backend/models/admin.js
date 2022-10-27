const mongoose = require('../config/db');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    contact_no: Number,
    email: String,
});

var userModel = mongoose.model('User', userSchema, 'Users');

module.exports = userModel;