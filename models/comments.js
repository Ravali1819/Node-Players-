const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: {
    type: String,
  },
  playerId: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
