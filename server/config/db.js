const mongoose = require('mongoose');

const URL = 'mongodb://localhost/todo';
mongoose.connect(URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose connected...'));

module.exports = db;
