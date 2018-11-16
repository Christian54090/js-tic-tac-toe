const Board = require("./board");

class Game {
  constructor(reader) {
    this._reader = reader;
    this._board  = new Board;
    this._turns  = 0;
  }

  run(completionCallback) {
    let reader = this._reader;
    let player = ['X', 'O'][this._turns % 2];
    this._board.show_board();
    if (this._turns < 9 && !this.gameOver()) {
      reader.question(`${player}, what coordinate? `, answer => {
        this.makeTurn(answer, player)
      });
      this.run(completionCallback);
    }
    completionCallback;
  }

  makeTurn(ans, player) {
    if ([...Array(9).keys()].includes(ans - 1) && this._board.includes(ans)) {
      this._board.edit_board(ans, player);
      this._turns += 1;
    } else {
      console.log("Invalid input.");
    }
  }

  gameOver() {
    let board = this._board.display
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
      let resultX = arr.filter(char => char === 'X');
      let resultO = arr.filter(char => char === 'O');
      if (resultX.length === 3 || resultO.length === 3) {
        return true;
      }
    })
    return false;
  }
};

module.exports = Game;
