const BloodBank = require("../models/bloodBankModel");

module.exports = {

    getBloodBankData: async (req, res) => {
        try {
            const bloodBanks = await BloodBank.find();
            res.json(bloodBanks);
        } catch (error) {
            console.error("Error fetching blood banks:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
