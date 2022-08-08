import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const gameSchema = new Schema({
  teamA: {
    type: Object,
    required: true
  },
  teamB: {
    type: Object,
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

const MultiSet = model('MultiSet', gameSchema);

export default MultiSet;