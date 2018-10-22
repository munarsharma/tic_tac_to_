class Board {
  constructor() {
    this.tiles = [[0, 1, 0], [0, 2, 0], [2, 0, 1]];
    this.tile = ["🔳 ", "❌", "⭕ "];
    this.position = {
      1: { x: 0, y: 0, z: 0 },
      2: { x: 0, y: 1, z: 0 },
      3: { x: 0, y: 2, z: 0 },
      4: { x: 1, y: 0, z: 0 },
      5: { x: 1, y: 1, z: 0 },
      6: { x: 1, y: 2, z: 0 },
      7: { x: 2, y: 0, z: 0 },
      8: { x: 2, y: 1, z: 0 },
      9: { x: 2, y: 2, z: 0 }
    };
  }

  makeBoard() {
    // console.log(this.tiles);
    this.tiles.forEach(el => {
      let row = "";
      el.forEach(col => {
        row += this.tile[col];
      });
      console.log(row);
      row = "";
    });
  }
}
// let b = new Board();
// b.makeBoard();
//0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟

//printRow(row)
// console.log(row.join(' |'));
//🤗😘
module.exports = Board;
