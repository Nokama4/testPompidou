const mongoose = require('mongoose');
// Schema is used to tell Mongoose what fields will exist
const { Schema } = mongoose;

// Defining ('Game') MODEL
const gameSchema = new Schema({
  playerID: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  factionID: Number,
  characterName: String,
  currentScene: Number,
  gender: String,
});


// Creating ('Game') MODEL CLASS - Is a "class" of users
const GameModelClass = mongoose.model('game', gameSchema);

// Exporting ('Game') MODEL
module.exports = GameModelClass;
