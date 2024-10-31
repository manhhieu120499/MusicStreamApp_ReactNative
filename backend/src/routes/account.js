const AccountController = require('../app/controllers/AccountController');
const express = require('express');
const route = express.Router();

route.get('/:username', AccountController.getAccount);

module.exports = route;
