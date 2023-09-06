const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/userController");
const {getAvailableBlood} = require("../controllers/availableBloodController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/availableBlood", getAvailableBlood);

module.exports = router;
