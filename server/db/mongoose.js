const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

module.exports = { mongoose };
