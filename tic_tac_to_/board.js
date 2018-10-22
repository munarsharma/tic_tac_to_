class Board {
  constructor() {
    this.tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  isTileOpen(tile) {
    return typeof this.tiles[tile] === 'number';
  }

  display() {
    console.clear();
    let str = '';
    this.tiles.forEach((el, i) => {
      if (i === 0 || i === 1 || i === 3 || i === 4 || i === 6 || i === 7) {
        str += el + ' | ';
      } else if (i === 2 || i === 5) {
        str += el;
        console.log(str);
        console.log('---------');
        str = '';
      } else {
        str += el;
        console.log(str);
        str = '';
      }
    });
  }
}

module.exports = Board;
