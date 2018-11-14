const readline = require('readline');
const Game = require('./game');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback() {
  reader.close();
  console.log('Well, thats the end of the game. Tada~');
}

const new_game = new Game(reader);
new_game.run(completionCallback());
