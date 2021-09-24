const express = require("express");

const router = express.Router();

const audienceController = require("../controller/audience");

router.get("/Players", audienceController.getPlayers);

router.get("/:playerId", audienceController.getPlayerDetail);

router.post("/:playerId", audienceController.postComment);

module.exports = router;
