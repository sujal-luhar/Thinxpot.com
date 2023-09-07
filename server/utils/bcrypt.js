const bcrypt = require("bcrypt");
const saltRounds = 10;
const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const matches = await bcrypt.compare(password, hashedPassword);
    return matches;
  } catch (error) {
    throw error;
  }
};

module.exports = { hashPassword, comparePassword };
