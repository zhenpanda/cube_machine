// gameRoom is a class that creates a game room that will make pairings
// friendlyGameRoom creates a class that makes a gameRoom object

class GameRoom {
  playerNames: [string];
  players: [];
  constructor(public playerNames:[string]) {
    this.playerNames = playerNames;
    this.players = [];
  }
  public greet() {
    console.log(this.playerNames);
    return this.playerNames;
  }
  // creating player record profile
  public setup() {
     console.log("Setting up draft...");
    for(let p of this.playerNames) {
      this.players.push({
        name: p,
        seat: 0,
        wins: 0,
        loss: 0,
        draws: 0,
        playedOpponents: [],
        possibleOpponents: [],
        idealOpponents: [],
        record: []
      });
    }
    //console.log(this.players);
  }
};
// let room = new GameRoom("Arron","Ben","Casey");
// room.greet();

class DraftRoom extends GameRoom {
  draftName: string;
  draftDate: {};
  format: string;
  structure: string;
  matchInprogress = [];
  constructor(public playerNames:[string], date:{}, format:string, structure:string) {
    //inherit game room parent
    super(playerNames);
    this.format = format;
    this.structure = structure;
  }
  // randomly seat the players
  randomSeating() {
    let totalSeat = this.playerNames.length;
    let seatNums = [];
    // shuffle the seats
    for (let s = 1; s < totalSeat+1; s++) {
      seatNums.push(s);
    };
    // console.log(seatNums);
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
    // create matches
    if(set) {
    }else{
      console.log("No bye is given by design, bye will be assign randomly.");
      // players will be pair off to matches returns matches and 1 bye
      this.matchup();
    }
  }
  // round 1 pairings
  initPairing(bye) {
    if(this.structure == "Causal") {
      console.log("This is set to " + this.structure + " tournament format.");
      console.log("Each round is set to ~50 mins long, but rounds will not go to turns.");
      // fit pairing or bye
      if(this.playerNames.length % 2 == 0) {
        console.log("Fit pairing");
      }else{
        console.log("Odd number of total players, one player will be getting a First round bye");
        this.setBye(bye);
        // console.log(this.players);
      }
    }
  }
  // matchup maker
  matchup(byePlayer) {
    // init setup
    console.log("Round one pairings are...");
    // find the pair farest away
    let midSeat = Math.floor(this.players.length / 2);
    if(byePlayer) {
      // pairing with bye announced
    }else{
      // even pairings no byes

    }
  }
   // start the draft
   kickOff() {
     console.log("Starting draft now.");
     super.setup();
     this.randomSeating();
     this.initPairing();
   }
};

// testing
console.log("~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~");
let playerPool = ["Abe","Ben","Cat","Dan","El","Frd","Gil","Hop","Ike"];
let date = {month: 8, day: 10, year: 2016};
let draft = new DraftRoom(playerPool, date, "JesCube", "Causal");
// start draft
draft.kickOff();














//
