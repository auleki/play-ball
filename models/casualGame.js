import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const gameSchema = new Schema({
  teamA: {
    type: String,
    required: true
  },
  teamB: {
    type: String,
    required: true
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
    required: true
  },
  // if mode is multi-set, this is required
  otherTeams: {
    type: [Object],
    required: true
  },
});

const CasualGame = model('CasualGame', gameSchema);

export default CasualGame;