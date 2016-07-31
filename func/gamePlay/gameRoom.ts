// gameRoom is a class that creates a game room that will make pairings
// friendlyGameRoom creates a class that makes a gameRoom object

class GameRoom {
  playerNames: [string];
  constructor(public playerNames:[string]) {
    this.playerNames = playerNames;
  }
  greet() {
    console.log(this.playerNames);
    return this.playerNames;
  }
}

// let room = new GameRoom("Arron","Ben","Casey");

class DraftRoom extends GameRoom {
  constructor() {
    //inherit parent
    super();
  }
  seating() {
    console.log(super.playerNames);
  }
}

// let draft = new DraftRoom("Dan","El","Freddy");
// draft.seating();
// room.greet();
