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
  }
}

let mateo = new HumanPlayer();
let muna = new ComputerPlayer();
let jinx = new Board();

rl.on('line', line => {
  let move = +line.trim();
  mateo.getMove(move);
});

console.log(mateo);
