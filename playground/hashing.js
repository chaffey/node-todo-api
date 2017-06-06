const {SHA256} = require('crypto-js');
const {SHA512} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
    id: 4
};

var token = jwt.sign(data, 'super secret');

console.log(token);

var decoded = jwt.verify(token, 'super secret');

console.log(decoded);
