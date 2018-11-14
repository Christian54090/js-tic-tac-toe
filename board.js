class Board {
  constructor() {
    this._display = [
      [1, '|', 2, '|', 3],
      ['-','-','-','-','-'],
      [4, '|', 5, '|', 6],
      ['-','-','-','-','-'],
      [7, '|', 8, '|', 9]
    ];
  }

  get display() {
    return this._display;
  }

  show_board() {
    this._display.forEach(function(arr) {
      console.log(arr.join(""));
    })
  }

  edit_board(old_val, new_val) {
    this._display.forEach(function(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] === old_val ? arr[i] = new_val : i;
      }
    })
  }
}

module.exports = Board;
