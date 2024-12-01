const Album = require('../models/Album');

class AlbumController {
	// [GET]
	async getAlbum(req, res, next) {
		const { id } = req.query;
		const album = await Album.findOne({ id: id });
		if (album) {
			res.status(200).send(album);
		} else {
			res.status(404).send('Album not found');
		}
	}
}

module.exports = new AlbumController();
