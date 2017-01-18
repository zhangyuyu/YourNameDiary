const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/diaryDB');
const diaryDB = mongoose.connection;

diaryDB.on('error', (err) => {
	console.log(`[Error] [${err.name}]: ${err.message}`);
});

diaryDB.once('open', () => {
	console.log('Connected to mongodb...');
});

module.exports = diaryDB;
