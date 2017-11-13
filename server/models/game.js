const mongoose = require('mongoose');
// Schema is used to tell Mongoose what fields will exist
const { Schema } = mongoose;

// Defining ('User') MODEL
const gameSchema = new Schema({
  playerID: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  factionID: Number,
  characterName: String,
  currentScene: Number,
  gender: String,
});


// Creating ('User') MODEL CLASS - Is a "class" of users
const GameModelClass = mongoose.model('game', gameSchema);

// Exporting ('User') MODEL
module.exports = GameModelClass;
