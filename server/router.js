const Authentication = require('./controllers/authentication');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // Setting Route Handler to handle .GET request to root ('/')
  // Any incoming request must pass through requireAuth to continue
  app.get('/', requireAuth, (req, res) => {
    console.log('Passes tu par là?');
    res.send({ User: 'Successfully Authenticated for Root Route' });
  });

  // Adding (middleware): 'requireSignin'
  // - Prevent User(s) from accessing '/signin' route (see user model)
  app.post('/signin', requireSignin, Authentication.signin);
  // Where User(s) register with unique email/password
  // - Receive unique JWT Token in return
  app.post('/signup', Authentication.signup);
};
