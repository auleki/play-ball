import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const gameSchema = new Schema({
  teamA: {
    type: Schema.Types.ObjectId,
    ref: 'team',
    required: true
  },
  teamB: {
    type: Schema.Types.ObjectId,
    ref: 'team',
    required: true
  },
  mode: {
    type: String,
    enum: ['official', 'multi_set', 'soft']
  },
  stats: {
    type: Object,
  },
  time: {
    type: String,
    required: true,
  },
  referee: {
    type: Schema.Types.ObjectId,
    ref: 'referee',
    required: true,
    unique: true
  },
  proTeams: {
    type: [Schema.Types.ObjectId],
    ref: 'team'
  },
  // if mode is multi-set, this is required
  otherTeams: {
    type: [Object],
    ref: 'team'
  },
});

const Game = model('Game', gameSchema);

export default Game;