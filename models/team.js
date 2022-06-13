const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true
  },
  fouls: {
    type: Number
  },
  players: [],
  steals: Number,
  blocks: Number,
  threePointer: Number,
  twoPointer: Number,

}, { timestamps: true });

module.export = model('Team', teamSchema);