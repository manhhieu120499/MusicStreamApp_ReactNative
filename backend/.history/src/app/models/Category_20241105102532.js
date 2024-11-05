const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
	_id: Schema.ObjectId,
	id: { type: Number, unique: true },
	name: { type: String, maxLength: 50 },
	bgColor: { type: String, maxLength: 50 },
	uri: { type: String, maxLength: 150 },
	path: { type: String, maxLength: 50 },
});

module.exports = mongoose.model('Category', Category);
