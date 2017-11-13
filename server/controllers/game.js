const User = require('../models/user');
const Game = require('../models/game');
const mongoose = require('mongoose');


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
  game.save((err, popo) => {
    if (err) {
      return next(err);
    }
    // Response--> Request: Send the current Game id
    res.json({ game: popo.id });
  });
};

exports.saveNewAction = (req, res, next) => {
  console.log(req.body.game);
  Game.findOneAndUpdate({ _id: req.body.game }, { currentScene: req.body.currentScene }, { new: true }, (err, doc) => {
    if (err) {
      return res.send(500, { error: err });
    }
    return res.send(doc);
  });
};
