const nodemailer = require('nodemailer');
const User = require('../models/userModel');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'raktadata6@gmail.com',
        pass: 'lohjhssbtgylzodu',
    },
});

module.exports = {
    sendEmergencyEmail: async (req, res) => {
        try {

            const {name, email, bloodGroup, address, contactNumber} = req.body;


            const users = await User.find({}, 'email');


            const emailContent = `
                 <p>Emergency Blood Request:</p>
                  <p>Name: ${name}</p>
                  <p>Email: ${email}</p>
                   <p>Blood Group: ${bloodGroup}</p>
                    <p>Address: ${address}</p>
                    <p>Contact Number: ${contactNumber}</p>
            `;

            for (const user of users) {
                const mailOptions = {
                    from: {name: 'raktadata', address: 'raktadata6@gmail.com'},
                    to: user.email,
                    subject: 'Emergency Blood Request',
                    html: emailContent,
                };

                await transporter.sendMail(mailOptions);
            }

            res.status(200).json({message: 'Emails sent successfully'});
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
}
