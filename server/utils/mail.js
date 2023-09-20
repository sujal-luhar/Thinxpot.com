const nodemailer = require("nodemailer");

const sendEmail = async (useremail, subject, text, data) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "",
      port: "",
      secure: false,
      auth: {
        user: "",
        pass: "",
      },
    });
    await transporter.sendMail({
      from: "",
      to: useremail,
      subject: subject,
      text: text,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { sendEmail };
