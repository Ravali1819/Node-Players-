const Player = require("../models/admin");

exports.getPlayers = (req, res, next) => {
  Player.find().then((result) => {
    res.render("admin/mainPage.ejs", {
      pageTitle: "All Player",
      path: "/adminPage",
      players: result,
    });
  });
};

exports.getAddPlayer = (req, res, next) => {
  res.render("admin/addPlayer.ejs", {
    pageTitle: "All Players",
    path: "/addPlayer",
    message: false,
  });
};

exports.postAddPlayer = (req, res, next) => {
  const code = req.body.code;
  const playerName = req.body.playerName;
  const from = req.body.from;
  const price = req.body.price;
  const isPlaying = req.body.isPlaying;
  const description = req.body.description;
  if (code !== "345235") {
    return res.render("admin/addPlayer.ejs", {
      pageTitle: "All Player",
      path: "/adminPage",
      message: "Enter Correct Code!",
    });
  }
  const data = new Player({
    code: { code },
    player: {
      playerName: playerName,
      from: from,
      price,
      isPlaying,
      description,
    },
  });
  data
    .save()
    .then((result) => {
      res.redirect("/adminPage");
    })
    .catch((err) => {
      console.log(err);
    });
};
