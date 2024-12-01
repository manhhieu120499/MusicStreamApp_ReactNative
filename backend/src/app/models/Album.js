const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Album = new Schema({
	_id: Schema.ObjectId,
	id: { type: Number, unique: true },
	album_name: { type: String, maxLength: 100 },
	cover_image: { type: String, maxLength: 150 },
	songs: [
		{
			_id: Schema.ObjectId,
			id: { type: Number, unique: true },
			title: { type: String, maxLength: 80 },
			author: { type: String, maxLength: 80 },
			src: { type: String, maxLength: 100 },
			image: { type: String, maxLength: 150 },
		},
	],
});

module.exports = mongoose.model('Album', Album);
