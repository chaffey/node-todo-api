const {SHA256} = require('crypto-js');
const {SHA512} = require('crypto-js');
const bcrypt = require('bcryptjs');

// const jwt = require('jsonwebtoken');
//
// var data = {
//     id: 4
// };
//
// var token = jwt.sign(data, 'super secret');
//
// console.log(token);
//
// var decoded = jwt.verify(token, 'super secret');
//
// console.log(decoded);

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$etcUh2khCxZ.VMdYjuqLbukrtb1OblzYwvKlOYzfdveVc19BBx.yW';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
