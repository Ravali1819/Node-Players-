const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  code: new Schema({
    code: String,
  }),

  player: new Schema({
    playerName: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    isPlaying: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }),
});

module.exports = mongoose.model("Player", playerSchema);
