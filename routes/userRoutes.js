const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/userController");
const {getAvailableBlood, getAllStates, getDistrictByState} = require("../controllers/availableBloodController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/availableBlood", getAvailableBlood);

router.get("/states", getAllStates);

router.get("/districts/:stateName", getDistrictByState)

module.exports = router;
