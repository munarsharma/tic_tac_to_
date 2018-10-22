class Board {
  constructor() {
    this.tiles = [[0, 1, 0], [0, 2, 0], [2, 0, 1]];
    this.tile = ["🔳 ", "❌", "⭕ "];
    this.position = {
      1: { row: 0, col: 0, taken: 0 },
      2: { row: 0, col: 1, taken: 0 },
      3: { row: 0, col: 2, taken: 0 },
      4: { row: 1, col: 0, taken: 0 },
      5: { row: 1, col: 1, taken: 0 },
      6: { row: 1, col: 2, taken: 0 },
      7: { row: 2, col: 0, taken: 0 },
      8: { row: 2, col: 1, taken: 0 },
      9: { row: 2, col: 2, taken: 0 }
    };
  }

  makeBoard() {
    console.clear();
    this.tiles.forEach(el => {
      let row = "";
      el.forEach(col => {
        row += this.tile[col];
      });
      console.log(row);
      row = "";
    });
  }

  isValidMove(m) {
    let pos = this.position[m];
    console.log(pos);
    //{row,pos,taken}
    // if (this.board.position[m].z) {
    //   return false;
    // } else {
    //   return true;
    // }
  }
}

// let b = new Board();
// b.makeBoard();
// b.isValidMove();

//0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟

//printRow(row)
// console.log(row.join(' |'));
//🤗😘

module.exports = Board;
