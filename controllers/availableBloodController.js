const AvailableBlood = require('../models/availableBloodModel');
const State = require("../models/statesModel");

module.exports = {
    getAvailableBlood: async (req, res) => {
        const {state, district, bloodGroup, componentType} = req.query;
        const query = {};

        if (state) {
            query['state'] = state;
        }

        if (district) {
            query['district'] = district;
        }

        if (bloodGroup) {
            query['places.bloodGroups.group'] = bloodGroup;
        }

        if (componentType) {
            query['places.bloodGroups.component'] = componentType;
        }

        // Log the query before execution
        console.log('Query:', query);


        try {
            const results = await AvailableBlood.find(query);

            // Log the results
            console.log('Results:', results);

            if (results.length === 0) {
                res.status(404).json({message: 'No matching data found.'});
            } else {
                res.json(results);
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },

    getAllStates: async (req, res) => {
        State.distinct('name', function (err, stateNames) {
            if (err) {
                console.error('Error:', err);
                return;
            }
            res.json(stateNames)
        });
    },

    getDistrictByState: async (req, res) => {
        const selectedState = req.params.stateName;
        State.findOne({name: selectedState})
            .then((state) => {
                if (state) {
                    const districts = state.districts; // Ensure that your State model has a 'districts' property
                    res.json(districts)
                } else {
                    console.log(`State ${selectedState} not found.`);
                }
            })
            .catch((error) => {
                console.error('Error fetching state data:', error);
            });
    }
}


// async function insertDummyBloodAvailableData() {
//     try {
//         await State.insertMany([
//             {
//                 name: 'Andhra Pradesh',
//                 districts: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'],
//             },
//             {
//                 name: 'Arunachal Pradesh',
//                 districts: ['Itanagar', 'Tawang', 'Changlang', 'Papum Pare', 'East Siang'],
//             },
//             {
//                 name: 'Assam',
//                 districts: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat', 'Nagaon'],
//             },
//             {
//                 name: 'Bihar',
//                 districts: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'],
//             },
//             {
//                 name: 'Chhattisgarh',
//                 districts: ['Raipur', 'Bhilai', 'Durg', 'Bilaspur', 'Korba'],
//             },
//             {
//                 name: 'Goa',
//                 districts: ['North Goa', 'South Goa'],
//             },
//             {
//                 name: 'Gujarat',
//                 districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
//             },
//             {
//                 name: 'Haryana',
//                 districts: ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Karnal'],
//             },
//             {
//                 name: 'Himachal Pradesh',
//                 districts: ['Shimla', 'Kullu', 'Mandi', 'Dharamshala', 'Solan'],
//             },
//             {
//                 name: 'Jharkhand',
//                 districts: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
//             },
//             {
//                 name: 'Karnataka',
//                 districts: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
//             },
//             {
//                 name: 'Kerala',
//                 districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
//             },
//             {
//                 name: 'Madhya Pradesh',
//                 districts: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain'],
//             },
//             {
//                 name: 'Maharashtra',
//                 districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
//             },
//             {
//                 name: 'Manipur',
//                 districts: ['Imphal', 'Churachandpur', 'Bishnupur', 'Thoubal', 'Ukhrul'],
//             },
//             {
//                 name: 'Meghalaya',
//                 districts: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar'],
//             },
//             {
//                 name: 'Mizoram',
//                 districts: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib'],
//             },
//             {
//                 name: 'Nagaland',
//                 districts: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'],
//             },
//             {
//                 name: 'Odisha',
//                 districts: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Puri'],
//             },
//             {
//                 name: 'Punjab',
//                 districts: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
//             },
//             {
//                 name: 'Rajasthan',
//                 districts: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
//             },
//             {
//                 name: 'Sikkim',
//                 districts: ['Gangtok', 'Namchi', 'Mangan', 'Ravangla', 'Gyalshing'],
//             },
//             {
//                 name: 'Tamil Nadu',
//                 districts: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
//             },
//             {
//                 name: 'Telangana',
//                 districts: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
//             },
//             {
//                 name: 'Tripura',
//                 districts: ['Agartala', 'Dharmanagar', 'Khowai', 'Ambassa', 'Udaipur'],
//             },
//             {
//                 name: 'Uttar Pradesh',
//                 districts: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut'],
//             },
//             {
//                 name: 'Uttarakhand',
//                 districts: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Nainital'],
//             },
//             {
//                 name: 'Jammu and Kashmir',
//                 districts: ['Srinagar', 'Jammu', 'Leh', 'Kargil', 'Anantnag']
//             }
//         ]);
//     } catch (error) {
//         console.log('err', +error)
//     }
// }
//
// insertDummyBloodAvailableData();
