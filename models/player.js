import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const playerSchema = new Schema({
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
  gamesPlayed: {
    pickup: Number,// this should be a reference to the game
    official: Number // this should be a reference to the game
  }

}, { timestamps: true });

const Player = model('Player', playerSchema);

export default Player;