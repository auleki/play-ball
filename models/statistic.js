import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const statisticSchema = new Schema({
  point: {
    type: Number,
    required: true
  },
  foul: {
    type: Number,
    required: true
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  players: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }
});

const Statistic = model('statistic', statisticSchema);

export default Statistic;