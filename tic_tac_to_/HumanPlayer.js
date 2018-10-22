//const readlineSync = require('readline-sync');

class HumanPlayer {
  constructor(num, game) {
    this.player = num;
    this.game = game;
  }

  placeMarker(m) {
    console.log(`you chose ${m}`);
  }

  getMove(move) {
    console.log('@humanPlayer move:', move, 'this.player:', this.player);
    // if (move > 0 && move <= 9) {
    //   // this.placeMarker(move);
    //   game.board.isValidMove(move);
    // } else {
    //   console.log(`Say what? I might have heard ${move}`);
    // }
  }
}

module.exports = HumanPlayer;
