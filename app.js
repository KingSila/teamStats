const team = {

     _players : [

     {firstName: 'Pablo',lastName: 'Sanchez',age: 35},
     {firstName: 'King',lastName: 'Mokone',age: 43},
     {firstName: 'Superman',lastName: 'Sizwe',age: 58},
     ],


    _games : [
        {opponent: 'Broncos',teamPoints: 42,opponentPoints: 27},
        {opponent: 'Chiefs',teamPoints: 02,opponentPoints: 32},
        {opponent: 'Amazulu',teamPoints: 01,opponentPoints: 217},
    ],

    get players(){
        return this._players;
    },
    get games(){

        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let  player = {
            firstName : firstName,
            lastName : lastName,
            age : age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let  game = {
            opponent : opponent,
            teamPoints : teamPoints,
            opponentPoints : opponentPoints
        };
        this.games.push(game);
    },
    
    
};
    team.addPlayer('Steph','Curry',28);
    team.addPlayer('Lisa','Leslie',44);
    team.addPlayer('Bugs','Bunny',76);
    console.log(team.players);
    
    team.addGame('Leopards',32,100);
    team.addGame('CapeTown city',36,289);
    team.addGame('Tshakuma',987,02);
    console.log(team.games);