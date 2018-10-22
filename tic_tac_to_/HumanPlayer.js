class HumanPlayer {
  constructor() {
    this.name = 'HumanPlayer';
  }

  placeMarker(m) {
    console.log(`you chose ${m}`);
  }

  getMove(move) {
    switch (true) {
      case move === 1:
      case move === 2:
      case move === 3:
      case move === 4:
      case move === 5:
      case move === 6:
      case move === 7:
      case move === 8:
      case move === 9:
        this.placeMarker(move);
        break;
      default:
        console.log(`Say what? I might have heard ${move}`);
        break;
    }
  }
}

module.exports = HumanPlayer;
