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
}

module.exports = new MusicController();
