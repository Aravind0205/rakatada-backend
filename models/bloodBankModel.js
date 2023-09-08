const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
});

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

module.exports = BloodBank;
