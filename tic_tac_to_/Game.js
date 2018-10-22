const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Player = require('./player.js');
const Board = require('./board.js');
// const ComputerPlayer = require("./ComputerPlayer.js");

class Game {
  constructor(p1, p2) {
    this.active = false;
    this.p1 = { player: 1, marker: '😘' };
    this.p2 = { player: 2, marker: '🤗' };
    this.board = new Board();
    this.playerNow = 1;
    this.playerNext = 2;
    // this.turn = 0;
  }

  play() {
    this.active = true;
    this.board.display();
  }

  loop(move) {
    if (this.isSingleDigit(move) && this.board.isTileOpen(move - 1)) {
      this.placeMarker(move);
      this.board.display();
      if (this.isWon()) {
        this.win();
      } else if (this.isTie()) {
        this.tie();
      } else {
        this.switchPlayers();
      }
      // console.log(move);
      // console.log(this["p" + this.playerNow].marker);
    } else {
      this.board.display();
      console.log('Press a number between 1-9');
    }
    // console.log(move);
    // console.log(this);
  }

  isSingleDigit(move) {
    return move > 0 && move <= 9;
  }

  placeMarker(move) {
    let tile = move - 1;
    this.board.tiles[tile] = this['p' + this.playerNow].marker;
  }

  isWon() {
    // this.turn++;
    let t = this.board.tiles;
    if (
      (t[0] === t[1] && t[1] === t[2]) ||
      (t[3] === t[4] && t[4] === t[5]) ||
      (t[6] === t[7] && t[7] === t[8]) ||
      (t[0] === t[3] && t[3] === t[6]) ||
      (t[1] === t[4] && t[4] === t[7]) ||
      (t[2] === t[5] && t[5] === t[8]) ||
      (t[0] === t[4] && t[4] === t[8]) ||
      (t[2] === t[4] && t[4] === t[6])
    ) {
      return true;
    } else {
      return false;
    }
  }

  win() {
    console.log(`Player ${this['p' + this.playerNow].player} Wins!`);
    this.over();
  }

  isTie() {
    return this.board.tiles.every(el => typeof el !== 'number');

    // return this.turn === 9;
  }

  tie() {
    console.log(`It's a Tie!`);
    this.over();
  }

  switchPlayers() {
    this.playerNow = this.playerNow === 1 ? 2 : 1;
    this.playerNext = this.playerNext === 1 ? 2 : 1;
  }

  isActive() {
    return this.active;
  }

  over() {
    this.active = false;
  }
}

let game = new Game();

rl.on('line', line => {
  if (game.isActive()) {
    let move = +line.trim();
    game.loop(move);
  } else {
    game.board.display();
    console.log('Game over');
  }
});

game.play();
