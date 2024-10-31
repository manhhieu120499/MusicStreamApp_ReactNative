const mongoose = require('mongoose');

async function connect() {
	try {
		mongoose.connect('mongodb://127.0.0.1:27017/MusicStreamApp');
		console.log('Connected to MongoDB!');
	} catch (err) {
		console.log('Error connecting to MongoDB');
	}
}

module.exports = { connect };
