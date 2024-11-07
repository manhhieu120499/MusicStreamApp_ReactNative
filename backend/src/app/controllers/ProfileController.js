const Profile = require("../models/Profile");
const { singleMongooseToObject } = require("../../util/mongoose");

class ProfileController {
  getProfileByName(req, res, next) {
    const { name } = req.query;
    Profile.findOne({ nameArtist: name })
      .then((profile) => {
        console.log(profile);
        return res.json(singleMongooseToObject(profile));
      })
      .catch((err) => next(err));
  }
}

module.exports = new ProfileController();
