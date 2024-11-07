const ProfileController = require("../app/controllers/ProfileController");
const express = require("express");
const route = express.Router();

route.get("/find", ProfileController.getProfileByName);

module.exports = route;
