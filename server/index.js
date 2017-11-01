
// Import
const express = require('express');
const bodyParser = require('body-parser');
const datas = require('./datas');
const factions = require('./factions');

// server
const app = express();

// body parser middle
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// get

app.get('/', (req, res) => {
  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir taper en POST avec Axios avec l'URL suivante :</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><a href="http://localhost:3000/words">http://localhost:3000/words</a></li>
      </ul>
    </div>
  `);
});

const findScene = sceneID => (
  datas.find(scene => (
    scene.id === sceneID
  ))
);

app.post('/datas', (req, res) => {
  const { current } = req.body;
  const scene = findScene(current);
  console.log(scene);
  res.json(scene);
});

app.get('/factions', (req, res) => {
  console.log(factions);
  res.json(factions);
});

// Start on :3000
app.listen(3000);
