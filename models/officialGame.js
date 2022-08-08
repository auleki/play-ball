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
  otherTeams: {
    type: [Schema.Types.ObjectId],
    ref: 'team',
    required: true
  },
});

const OfficialGame = model('OfficialGame', gameSchema);

export default OfficialGame;