import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const refereeSchema = new Schema({
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
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  gamesOfficiated: {
    pickup: Number,// this should be a reference to the game
    official: Number // this should be a reference to the game
  }

}, { timestamps: true });

const Referee = model('Referee', refereeSchema);

export default Referee;