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
        record: [],
        bye: false
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
  seatOrder: [];
  activeGames: [];
  constructor(public playerNames:[string], date:{}, format:string, structure:string) {
    //inherit game room parent
    super(playerNames);
    this.draftDate = date;
    this.format = format;
    this.structure = structure;
    this.seatOrder = [];
    this.activeGames = [];
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
              //let num = this.players[c].seat;
              this.seatOrder.push( this.players[c] );
          }
      }
    }
    console.log(seatingCall);
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
  // set bye rule
  setBye(set) {
    // create matches
    if(set) {
    }else{
      console.log("No bye has been designed, bye will be assign randomly.");
      // players will be pair off to matches returns matches and 1 bye
      this.matchup();
    }
  }
  // matchup maker
  matchup(byePlayer) {
    // init setup
    console.log("Round one pairings are...");
    console.log("Event " + this.draftDate.month + "/" + this.draftDate.day + "/" + this.draftDate.year );
    // find the pair farest away
    let midSeat = Math.floor(this.players.length / 2);
    if(byePlayer) {
      // pairing with bye announced
    }else{
      // try to pair until no more can be paired up
      // console.log(this.seatOrder);
      for(let p = 0; p < midSeat; p++) {
        // let matchInfo = String(this.seatOrder[p] + " vs " + this.seatOrder[p+midSeat])
        // console.log("seatOrder", this.seatOrder[p], this.seatOrder[p+midSeat]),
        this.game("new", this.seatOrder[p], this.seatOrder[p+midSeat]);
      }
      // console.log(matches);
      for (let g = 0; g < this.activeGames.length; g++) {
        if(this.activeGames[g].playerTwo) {
          console.log("Match #"+ this.activeGames[g].game + " " + this.activeGames[g].playerOne.name + " vs " + this.activeGames[g].playerTwo.name);
        }else{
          if(this.seatOrder[this.players.length-1]) {
            // bye player
            console.log(this.seatOrder[this.players.length-1] + " - bye");
          }
        }
      }
    }
  }
  // game maker, creates games between players
  game(state, player1, player2, result, gameNum) {
    if(state == "new") {
      let gameNum = ( parseInt(this.activeGames.length)+1);
      this.activeGames.push({
        game: gameNum,
        playerOne: player1,
        playerTwo: player2,
      })
      // put opponents into played array for each player object
      for (let a = 0; a < this.players.length; a++) {
          if(this.players[a].name == player1.name) {
            this.players[a].playedOpponents.push(player2.name)
          }else if(this.players[a].name == player2.name) {
            this.players[a].playedOpponents.push(player1.name)
          }
      }
    }else if(state == "fin") {
      if(gameNum) {
        // report result
        if(result) {
            // report result
            // remove finished game from array
            this.activeGames.splice(gameNum, 1);
            // display active game still going on
            this.announceGames("yell");
          }else{
            console.log("No result posted for Match#" + gameNum);
          }
        }else{
          console.log("No gameNum provided");
        }
    }
  }
  // announce the games of each player
  announceGames(mode) {
    if(mode == "yell") {
        if(this.activeGames.length > 0) {
          console.log("Current active games are....");
          for (let v = 0; v < this.activeGames.length; v++) {
            console.log("Ongoing Match #"+ this.activeGames[v].game + " " + this.activeGames[v].playerOne.name + " vs " + this.activeGames[v].playerTwo.name);
          }
          console.log("...please finish these game in a timely manner.")
        }else{
          console.log("There are no active games going on.")
        }
    }else if(mode == "standing") {
      // standing of players
    }
  }
   // start the draft
   kickOff() {
     console.log("Starting draft now.");
     // gameroom setup func
     super.setup();
     // draft funcs
     this.randomSeating();
     this.initPairing();
   }
   // report a player's current status
   playersStats() {
     // display each player's stats
     for (let p = 0; p < this.players.length; p++) {
         // console.log(this.players[p]);
         console.log("----- -----");
         console.log(this.players[p].name, "'s played opponents are...'");
         console.log(this.players[p].playedOpponents);

     }
   }
};

// testing
console.log("~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~");
let playerPool = ["Abe","Ben","Cat","Dan","El","Frd","Gil","Hop","Ike"];
let date = {month: 8, day: 10, year: 2016};
let draft = new DraftRoom(playerPool, date, "JesCube", "Causal");
// start draft
draft.kickOff();
// report finished game
draft.game("fin", "","",[2,1], 3);
draft.playersStats();












//
