const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Song = new Schema({
	_id: Schema.ObjectId,
	id: { type: Number, unique: true },
	title: { type: String, maxLength: 80 },
	author: { type: String, maxLength: 80 },
	src: { type: String, maxLength: 100 },
});

module.exports = mongoose.model('Song', Song);
