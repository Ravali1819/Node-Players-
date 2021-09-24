const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin");

router.get("/adminPage", adminController.getPlayers);

router.get("/addPlayer", adminController.getAddPlayer);

router.post("/addPlayer", adminController.postAddPlayer);

module.exports = router;
