const jwt = require('jsonwebtoken')

const SIGN_TOKEN = process.env.SIGN_TOKEN;

const generateToken = (id) => {
    const oneDay = 604800;
    return jwt.sign({ id }, SIGN_TOKEN || 'secretKey', { expiresIn: oneDay }); 
}

module.exports = {generateToken}