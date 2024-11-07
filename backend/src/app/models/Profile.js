const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    _id: Schema.ObjectId,
    uriBanner: { type: String, maxLength: 150 },
    nameArtist: { type: String, maxLength: 150 },
    followers: { type: String, maxLength: 50 },
    popular: {
      id: { type: Number },
      title: { type: String },
      image: { type: String },
      uri: { type: String },
    },
    album: [
      {
        id: { type: Number },
        title: { type: String },
        year: { type: String },
        uri: { type: String },
      },
    ],
    event: [
      {
        id: { type: Number },
        title: { type: String },
        uri: { type: String },
      },
    ],
    playList: [
      {
        id: { type: Number },
        title: { type: String },
        uri: { type: String },
      },
    ],
    uriAvatar: { type: String, maxLength: 150 },
    artist: {
      title: { type: String },
      data: [
        {
          id: { type: Number },
          name: { type: String },
          uri: { type: String },
        },
      ],
    },
  },
  { timestamps: true },
  { versionKey: false }
);

module.exports = mongoose.model("Profile", Profile);
