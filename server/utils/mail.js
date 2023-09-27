const nodemailer = require("nodemailer");

const sendEmail = async (useremail, subject, text, data) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "luharsujal2712@gmail.com",
        pass: "axll jabp cbxq jazd",
      },
    });
    await transporter.sendMail({
      from: "luharsujal2712@gmail.com",
      to: useremail,
      subject: subject,
      text: text,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { sendEmail };
