const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWT_SECRET = "thisIsSecretDontTellAnyOne";
const EXPIRESIN = "3600s";
const userModel = require("../models/user");

const jwtStretegy = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;

const options = {
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new jwtStretegy(options, async (payload, done) => {
    try {
      const user = await userModel.findById(payload._id);
      if (user) {
        const details = {
          _id: user._id,
          username: user.username,
          email: user.email,
        };
        return done(null, details);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(err, false);
    }
  })
);

module.exports = { passport, JWT_SECRET, EXPIRESIN };
