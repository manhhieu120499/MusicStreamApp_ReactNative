const express = require('express');
const route = express.Router();
const MusicController = require('../app/controllers/MusicController');

route.get('/', MusicController.show);

module.exports = route;
