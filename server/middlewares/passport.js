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
    await userModel.findById(payload.id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = { passport, JWT_SECRET, EXPIRESIN };
