const express = require("express");

const router = express.Router();

const authController = require("../controller/auth");

router.get("/", authController.getAuth);

router.post("/", authController.postAuth);

module.exports = router;
