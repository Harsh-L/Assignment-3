const { request } = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const exp_time = 3 * 60 * 60;

const sign = (data) => {
    const token = jwt.sign({...data}, secret, {algorithm: 'RS256', expiresIn: exp_time});
    req.headers.authorization = 'Bearer ' + token;
}

const verify = (req, res, next) => {
    let token = req.headers.authorization;

    token = token?.split(' ')[1];
    if(token){
        try {
            if (jwt.verify(token, process.env.SECRET_KEY)) {
                return next()
            } else {
                return res.status(401).end('Unauthorized access');
            }
        } catch (error) {
            return res.status(401).end('Something went wrong');
        }
    } else {
        return res.status(401).end('Unauthorized access');
    }
    
}

module.exports = {sign, verify};