const Board = require("./board");
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(reader) {
    this._reader = reader;
    this._board  = new Board;
    this._turns  = 0;
  }

  run(reader, completionCallback) {
    while (this._turns < 9 && !gameOver(this._board)) {
      if (this._turns % 2 === 1) {
        reader.question("X, what coordinate?", (coord) => {
          if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(coord)) {
            
          }
        });
      }
    }
  }

  endGame(board, turn) {
    // if game is won, reader.close(); with a message
  }

  endTurn(winner) {
    console.log(`${winner} wins!`);
    reader.close();
  }
};
