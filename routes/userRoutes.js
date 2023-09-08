const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/userController");
const {getAvailableBlood, getAllStates, getDistrictByState} = require("../controllers/availableBloodController");
const {getBloodBankData} = require("../controllers/bloodbankController");
const {sendEmergencyEmail} = require("../controllers/mailController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/availableBlood", getAvailableBlood);

router.get("/states", getAllStates);

router.get("/districts/:stateName", getDistrictByState);

router.get("/bloodBanks", getBloodBankData);

router.post("/emergencyEmail", sendEmergencyEmail);

module.exports = router;
