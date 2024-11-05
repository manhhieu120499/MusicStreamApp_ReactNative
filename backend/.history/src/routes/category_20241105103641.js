const express = require('express');
const route = express.Router();
const CategoryController = require('../app/controllers/CategoryController');

route.get('/', CategoryController.getAllCategory);

module.exports = route;
