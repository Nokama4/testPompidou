const Authentication = require('./controllers/authentication');
const passport = require('passport');
const passportService = require('./services/passport');
const scenes = require('./databases/scenes');
const factions = require('./databases/factions');
const { validateBody, schemas } = require('./services/routeHelpers');

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
  app.post('/signin', validateBody(schemas.signInSchema), requireSignin, Authentication.signin, (req, res) => {
    console.log('coucou');
    res.redirect('/');
  });
  // Where User(s) register with unique email/password
  // - Receive unique JWT Token in return
  app.post('/signup', validateBody(schemas.signUpSchema), Authentication.signup);

  const findScene = sceneID => (
    scenes.find(scene => (
      scene.id === sceneID
    ))
  );

  app.post('/scenes', requireAuth, (req, res) => {
    const { current } = req.body;
    const scene = findScene(current);
    res.json(scene);
  });

  app.get('/factions', requireAuth, (req, res) => {
    // res.send({ User: 'Successfully Authenticated for Root Route' });
    res.json(factions);
  });
};
