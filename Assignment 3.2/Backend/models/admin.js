const mongoose = require('../config/db');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    contact_no: Number,
    email: String,
});

var adminModel = mongoose.model('Admin', userSchema, 'Admins');

module.exports = adminModel;