const User = require('../models/user');
const Game = require('../models/game');


exports.saveIntro = (req, res, next) => {
  const { faction } = req.body;
  const { factionID } = req.body;
  const { characterName } = req.body;
  const { gender } = req.body;
  const { currentScene } = req.body;
  const playerID = req.user._id;

  // *ONLY CREATING Game (not saved yet)
  const game = new Game({
    playerID,
    faction,
    factionID,
    characterName,
    gender,
    currentScene,
  });

    // *Now SAVING Game to database
  game.save((err) => {
    if (err) {
      return next(err);
    }
    // Response--> Request: Confirm User Created
    res.json({ game: 'sauvegardé' });
  });
};
