// Set up JWT Strategy
const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
// Passport-Strategy(s): Method(s) for authenticating a user
// (i.e. via JWT or username/password)
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

/* SIGN-IN  */
// CREATING LOCAL Strategy: Verifying E-Mail and Password--------
// - Need to tell this Local Strategy where to look for request (for email/password) */
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, ((email, password, done) => {
  /* Verify email/password - call DONE with User:
      (+) Correct Match: Call done==> False
      (-) Incorrect Match: Call done==> True
      'done' is supplied by Passport.js   */
  console.log(email);
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log('err1');
      return done(err);
    }
    if (!user) {
      console.log('err2');
      return done(null, false, { message: 'no user' });
    }
    console.log('va comparer');
    // Next: Need to Cross-reference password (see user model first)
    // -  After user model method defined - bring in isMatch
    user.comparePassword(password, (err, isMatch) => {
      console.log(password);
      // Error: Return early, call done
      if (err) {
        console.log('err3');
        return done(err);
      }
      // If search process 'successful' but without match (false)
      if (!isMatch) {
        console.log('err4');
        return done(null, false, { message: 'no match' });
      }

      // If match found
      return done(null, user);
    });
  });
}));

/*  SIGN-UP/REGISTER  */
// SETTING UP options for JWT Strategy--------------------------------
const jwtOptions = {
  // Need to tell JwtStrategy where to look for that JWT Token (which can be stored anywhere on request)
  // In this case, directing it to Header
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // With JWT Strategy, need to provide it the secret
  secretOrKey: config.secret,
};

//  CREATING JWT Strategy------------------------------
// (Decoded JWT Token) 'payload' - (see controllers/authentication.js)
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const jwtLogin = new JwtStrategy(jwtOptions, (function (payload, done) {
  // See if user ID IN PAYLOAD exist in DB
  //  (+): call 'done' WITH a user object
  // (-): call 'done' WITHOUT a user object
  //

  console.log('payload');
  console.log(payload);
  User.findById(payload.sub, (err, user) => {
    // if WITH ERROR (no - user object)
    console.log('payload.sub');
    console.log(payload.sub);

    if (err) {
      // 'unsuccessful' search process(err): return error object;
      console.log('err, false');
      return done(err, false);
      // err (returning error object)
      // false (user object if we did NOT found one)
    }
    // if WITHOUT ERROR (yes - user object)
    if (user) {
      console.log('null, user');
      // 'successful' search process(null): return (user); no error object to return;
      done(null, user);
    }
    else {
      console.log('success');
      // 'successful' search process(null) - but user NOT found (false); no error object to return;
      done(null, false);
    }
  });
}));

// Lastly, telling passport to use the ABOVE strategies------------------------------------
// For SIGN-UP
passport.use(jwtLogin);
// For SIGN-IN
passport.use(localLogin);
