// gameRoom is a class that creates a game room that will make pairings
// friendlyGameRoom creates a class that makes a gameRoom object

class GameRoom {
  playerNames: [string];
  players: [];
  constructor(public playerNames:[string]) {
    this.playerNames = playerNames;
    this.players = [];
  }
  greet() {
    console.log(this.playerNames);
    return this.playerNames;
  }
  // creating player record profile
  setup() {
    for(let p of this.playerNames) {
      this.players.push({
        name: p,
        seat: 0,
        wins: 0,
        loss: 0,
        draws: 0,
        defeatedOpponents: [],
        victoriousOpponents: [],
        records: [],
        awards: []
      });
    }
    //console.log(this.players);
  }
};

// let room = new GameRoom("Arron","Ben","Casey");
// room.greet();

class DraftRoom extends GameRoom {
  tournamentFormat: string;
  constructor(public playerNames:[string]) {
    //inherit game room parent
    super();
  }

  // randomly seat the players
  randomSeating() {
    let totalSeat = this.playerNames.length;
    let seatNums = [];
    // shuffle the seats
    for (let s = 1; s < totalSeat+1; s++) {
      seatNums.push(s);
    };
    console.log(seatNums);
    // shuffle func
    Array.prototype.shuffle = function() {
        let input = this;
        for (let i = input.length-1; i >=0; i--) {
            let randomIndex = Math.floor(Math.random()*(i+1));
            let itemAtIndex = input[randomIndex];
            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }
    seatNums.shuffle();
    // assign seats
    for (let e = 0; e < this.players.length; e++) {
        this.players[e].seat = seatNums[e];
    }
    // announce seating
    let seatingCall = "";
    for (let a = 0; a < seatNums.length; a++) {
      for (let c = 0; c < this.players.length; c++) {
          if (this.players[c].seat == a+1) {
              seatingCall = seatingCall + "Seat number " + (a+1) + " " + this.players[c].name + "\n";
          }
      }
    }
    console.log(seatingCall);
  }

  // set bye rule
  setBye(set) {
    if(set) {

    }else{
      console.log("No bye is given by design, bye will be assign randomly.");
    }
  }
  // round 1 pairings
  initPairing(format) {
    this.tournamentFormat = format;
    if(format == "Causal") {
      console.log("This is set to " + this.tournamentFormat + " tournament format.");
      console.log("Each round is set to ~50 mins long, no 5 turns rule.");
      // fit pairing or bye
      if(this.playerNames.length % 2 == 0) {
        console.log("Fit pairing");
      }else{
        console.log("One player will be getting a first round bye");
        this.setBye();
        // console.log(this.players);
      }
    }
  }
};

// testing
let draft = new DraftRoom(["Abe","Ben","Cat","Dan","El","Frd","Gil","Hop","Ike"]);
draft.setup();
draft.randomSeating();
draft.initPairing("Causal");
