const AccountController = require('../app/controllers/AccountController');
const express = require('express');
const route = express.Router();

route.get('/:username', AccountController.getAccount);
route.get('/create', AccountController.createAccount);

module.exports = route;
