import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "player"
    }
  ],
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "games"
    }
  ],
  isPlaying: Boolean,
}, { timestamps: true });

const Team = model('Team', teamSchema);

export default Team;