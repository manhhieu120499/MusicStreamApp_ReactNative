const Song = require('../models/Song');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MusicController {
	//[GET] get all songs
	show(req, res, next) {
		Song.find({})
			.then((songs) => {
				res.json(multipleMongooseToObject(songs));
			})
			.catch((err) => next(err));
	}

	// [GET] get single song
	async getSingleSong(req, res, next) {
		const { id } = req.query;
		const song = await Song.findOne({ id: id });
		if (song) {
			res.status(200).send(song);
		} else {
			res.status(404).send('Song not found');
		}
	}
}

module.exports = new MusicController();
