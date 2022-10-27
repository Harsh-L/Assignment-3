const { request } = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const exp_time = 3 * 60 * 60;

const sign = (req,res) => {
    const token = jwt.sign({username: req.user.username}, secret, {algorithm: 'RS256', expiresIn: exp_time});
    req.headers.authorization = 'Bearer ' + token;
}

const verify = (req, res, next) => {
    var token = req.headers.authorization;
    if(!token) return res.status(403).end('Not Authorized');

    token = token.split(' ')[1];

    try {
        var payload = jwt.verify(token);
        next();
    } catch (error) {
        
    }
}

module.exports = {sign, verify};