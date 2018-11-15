const Board = require("./board");

class Game {
  constructor(reader) {
    this._reader = reader;
    this._board  = new Board;
    this._turns  = 0;
  }

  run(completionCallback) {
    let gameCheck = gameOver(this._board);
    this._board.show_board();
    if (this._turns < 9 && !gameCheck) {
      if (this._turns % 2 === 1) {
        makeTurn('X');
        run(completionCallback);
      } else {
        makeTurn('O');
        run(completionCallback);
      }
    } else {
      completionCallback();
    }
  }

  makeTurn(turn) {
    let reader = this._reader;
    reader.question(`${turn}, what coordinate? `, (pick) => {
      if ([...Array(9).keys()].includes(pick) && this._board.includes(pick)) {
        this._board.edit_board(pick, turn);
        this._turns += 1;
      } else {
        console.log("Invalid input.");
      }
    });
  }

  gameOver(board) {
    let sets  = [
      [board[0][0], board[2][0], board[4][0]],
      [board[0][2], board[2][2], board[4][2]],
      [board[0][4], board[2][4], board[4][4]],
      [board[0][0], board[0][2], board[0][4]],
      [board[2][0], board[2][2], board[2][4]],
      [board[4][0], board[4][2], board[4][4]],
      [board[0][0], board[2][2], board[4][4]],
      [board[0][4], board[2][2], board[4][0]],
    ];
    sets.forEach(function(arr) {
      let result = arr.filter(char => char === 'X');
      if (result.length === 3 || result.length === 0) {
        return true;
      }
    })
    return false;
  }
};

module.exports = Game;
