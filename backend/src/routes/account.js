const AccountController = require('../app/controllers/AccountController');
const express = require('express');
const route = express.Router();

<<<<<<< HEAD
route.get('/find/:username', AccountController.getAccount);
route.post('/create', AccountController.createAccount);
=======
route.get('/find', AccountController.getAccount);
>>>>>>> 5bddb84a31716c92df0df65ae6d7339b2c9c538b

module.exports = route;
