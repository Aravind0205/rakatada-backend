const mongoose = require("mongoose");

const availableBloodSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    places: [
        {
            name: {
                type: String,
                required: true,
            },
            bloodGroups: [
                {
                    group: {
                        type: String,
                        required: true,
                    },
                    component: {
                        type: String,
                        required: true,
                    },
                    unitsAvailable: {
                        type: Number,
                        required: true,
                    },
                },
            ],
        },
    ],
});

module.exports = mongoose.model('AvailableBlood', availableBloodSchema);
