const ContactUser = require("../models/ContactUser");
const validator = require("validator");
const {ContactMail}=require("../mailer/mailer");
const sendmessage = async (req, res) => {
  try {
    console.log("enter sendmessage");
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "Please enter data properly or filled all data",
      });
    }
    console.log(name, email, phone, message);
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Please enter email properly",
      });
    }

    const sendmessage = await ContactUser.create({
      name: name,
      email: email, 
      phone: phone,
      message: message,
    });

    await sendmessage.save();

    const usermail={name:name,email:email,phone:phone,message:message};

    ContactMail(usermail,"Portfolio message Urgent");

    return res.status(200).json({
        message: "Message sent successfully",
      });


  } catch (error) {
    console.log(error);
    console.log("error occurs while sending contact us messageing");
  }
};

module.exports = { sendmessage };
