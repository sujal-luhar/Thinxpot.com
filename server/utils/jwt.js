const { sign } = require("jsonwebtoken");
const { JWT_SECRET, EXPIRESIN } = require("../middlewares/passport");
const generateToken = (userId) => {
  try {
    return sign({ _id: userId }, JWT_SECRET, {
      expiresIn: EXPIRESIN,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { generateToken };
