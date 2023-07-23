const nodemailer = require("nodemailer");
const ContactMail = async (usermail, subject) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.auth_email,
      pass: process.env.auth_password,
    },
  });

  let html = `<p>Hello, <b>${usermail.name}</b></p>
    <h2>This user send you a mail </h2>
    <h3>Email : ${usermail.email}</h3>
    <h5>Phone : ${usermail.phone}</h5>

    <br />
    <h4>Message : </h4>
    <h2>${usermail.message}</h2>
    
    <br />
    <p><b>Thanks and Regards ,</b></p>
    
            `;

  let mailDetails = {
    from: usermail.email,
    to: process.env.admin_email,
    subject: subject,
    html: html,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};


module.exports = { ContactMail };
