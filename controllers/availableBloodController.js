const AvailableBlood = require('../models/availableBloodModel');
const State = require("../models/statesModel");
const {statesData} = require("../dummyData/stateData");

module.exports = {
    getAvailableBlood: async (req, res) => {
        try {
            const blood = await AvailableBlood.find({});
            if (!blood) {
                throw new Error("There is no items");
            } else {
                res.json(blood);
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}


async function insertDummyBloodAvailableData() {
    try {
        await State.insertMany([
            {
                name: 'Andhra Pradesh',
                districts: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'],
            },
            {
                name: 'Arunachal Pradesh',
                districts: ['Itanagar', 'Tawang', 'Changlang', 'Papum Pare', 'East Siang'],
            },
            {
                name: 'Assam',
                districts: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat', 'Nagaon'],
            },
            {
                name: 'Bihar',
                districts: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'],
            },
            {
                name: 'Chhattisgarh',
                districts: ['Raipur', 'Bhilai', 'Durg', 'Bilaspur', 'Korba'],
            },
            {
                name: 'Goa',
                districts: ['North Goa', 'South Goa'],
            },
            {
                name: 'Gujarat',
                districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
            },
            {
                name: 'Haryana',
                districts: ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Karnal'],
            },
            {
                name: 'Himachal Pradesh',
                districts: ['Shimla', 'Kullu', 'Mandi', 'Dharamshala', 'Solan'],
            },
            {
                name: 'Jharkhand',
                districts: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
            },
            {
                name: 'Karnataka',
                districts: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
            },
            {
                name: 'Kerala',
                districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
            },
            {
                name: 'Madhya Pradesh',
                districts: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain'],
            },
            {
                name: 'Maharashtra',
                districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
            },
            {
                name: 'Manipur',
                districts: ['Imphal', 'Churachandpur', 'Bishnupur', 'Thoubal', 'Ukhrul'],
            },
            {
                name: 'Meghalaya',
                districts: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar'],
            },
            {
                name: 'Mizoram',
                districts: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib'],
            },
            {
                name: 'Nagaland',
                districts: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'],
            },
            {
                name: 'Odisha',
                districts: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Puri'],
            },
            {
                name: 'Punjab',
                districts: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
            },
            {
                name: 'Rajasthan',
                districts: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
            },
            {
                name: 'Sikkim',
                districts: ['Gangtok', 'Namchi', 'Mangan', 'Ravangla', 'Gyalshing'],
            },
            {
                name: 'Tamil Nadu',
                districts: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
            },
            {
                name: 'Telangana',
                districts: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
            },
            {
                name: 'Tripura',
                districts: ['Agartala', 'Dharmanagar', 'Khowai', 'Ambassa', 'Udaipur'],
            },
            {
                name: 'Uttar Pradesh',
                districts: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut'],
            },
            {
                name: 'Uttarakhand',
                districts: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Nainital'],
            },
            {
                name: 'Jammu and Kashmir',
                districts: ['Srinagar', 'Jammu', 'Leh', 'Kargil', 'Anantnag']
            }
        ]);
    } catch (error) {
        console.log('err', +error)
    }
}

insertDummyBloodAvailableData();
