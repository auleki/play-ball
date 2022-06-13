const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const officialSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true
  },
  username: {
    type: Number,
    required: true
  },
  verified: {
    type: Boolean,
    required: true
  },
  gamesOfficiated: {
    pickup: Number,
    official: Number
  }

}, { timestamps: true });

module.export = model('Official', officialSchema);