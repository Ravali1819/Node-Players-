const admin = require("../models/admin");
const Player = require("../models/admin");
const Comment = require("../models/comments");

exports.getPlayers = (req, res, next) => {
  const teamNames = req.query.teamName;
  Player.find({ "player.from": teamNames }).then((result) => {
    res.render("audience/mainPage.ejs", {
      pageTitle: "All Player",
      path: "/Players",
      players: result,
      user: true,
      admin: false,
    });
  });
};

exports.getPlayerDetail = (req, res, next) => {
  const playId = req.params.playerId.split("=")[1];
  Player.find({ "player._id": playId }).then((result) => {
    let players = result;
    Comment.find({ playerId: playId }).then((result) => {
      res.render("audience/PlayerDetail.ejs", {
        pageTitle: "Player Detail",
        path: "/playerDetail/player",
        players: players,
        comments: result,
        user: true,
        admin: false,
      });
    });
  });
};

exports.postComment = (req, res, next) => {
  const playId = req.body.playerId;
  const message = req.body.comments;
  const data = new Comment({
    message: message,
    playerId: playId,
  });

  data
    .save()
    .then((result) => {
      res.redirect(`/:playerId=${playId}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
