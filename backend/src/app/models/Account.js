const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
	_id: Schema.ObjectId,
	username: { type: String, unique: true, maxLength: 50 },
	password: { type: String, maxLength: 50 },
});

module.exports = mongoose.model('Account', Account);
