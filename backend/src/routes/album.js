const express = require('express');
const route = express.Router();
const AlbumController = require('../app/controllers/AlbumController');

route.get('', AlbumController.getAlbum);

module.exports = route;
