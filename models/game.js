const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  teamA: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }
});

module.export = mongoose.model('Game', gameSchema);