const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  //prompt: 'OHAI> '
});

const HumanPlayer = require('./HumanPlayer.js');
const Board = require('./board.js');
const ComputerPlayer = require('./ComputerPlayer.js');

class Game {
  constructor() {
    this.name = 'Game';
    this.currentPlayer = 1;
    this.nextPlayer = 2;
    this.rl = rl;
    this.board = new Board();
    this.p1 = new HumanPlayer(1, this);
    this.p2 = new HumanPlayer(2, this);
  }

  getMove(move) {
    console.log(
      '@humanPlayer move:',
      move,
      'currentPlayer:',
      this.currentPlayer
    );
    this.switchPlayers();
    //this["p" + this.currentPlayer].getMove(move);
  }

  play() {
    this.board.makeBoard();
  }

  switchPlayers() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    this.nextPlayer = this.nextPlayer === 1 ? 2 : 1;
  }
}

let game = new Game();
// let mateo = new HumanPlayer();
// let muna = new ComputerPlayer();
// let jinx = new Board();
//
rl.on('line', line => {
  let move = +line.trim();
  game.getMove(move);
});

game.play();
// console.log(game);
