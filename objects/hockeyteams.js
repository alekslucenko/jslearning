// Javascript learning, simple object demonstration using methods.

const team = {
    _players : [{firstName : "Pete", lastName : "Smith", position : "front"},
                {firstName : "Bugs", lastName : "Bunny", position : "goal"},
                {firstName : "Joseph", lastName : "Butarin", position : "benchwarmer"}],
    
    get players(){ // get object method that is named players. (Returns all content from _players using "this" to access object key value pairs outside the method.)
        return this._players;

    },

    addPlayer(firstName, lastName, position){ // Creating object method to add a new player to the _players array by passing in a first & last name & position as parameters.
        let newPlayer ={
            firstName,  //Using property value shorthand because key and value pair have same names.
            lastName,
            position

        }

        this._players.push(newPlayer); //Push the newPlayer object into the main _players array.

    }
};

console.log(team.players); //Logging original _players array of objects
team.addPlayer("Vitaly","Nonstock","BENCHERR"); // Using addPlayer method to add a player with a firstName, lastName, and position.
console.log(team.players); //Logging updated _players array which now includes the new player in a child object.

