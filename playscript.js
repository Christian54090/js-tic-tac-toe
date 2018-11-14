const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback() {
  console.log('Well, thats the end of the game. Tada~');
}

const new_game = new Game(reader);
new_game.run(completionCallback());
