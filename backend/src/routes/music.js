const express = require('express');
const route = express.Router();
const MusicController = require('../app/controllers/MusicController');

route.get('/', MusicController.show);
route.get('/singleSong/', MusicController.getSingleSong);

module.exports = route;
