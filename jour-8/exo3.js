// POKEMON

var request = require("request");

console.log("test1");
function catchPokemon(num) {
    
    request.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118", function (err, res, body) {
        console.log("test2");


        var allPokemon = JSON.parse(body);
        console.log("allPokemon: ", allPokemon);

        var tabPokemon = allPokemon.results;
        console.log("tabPokemon: ", tabPokemon);

        // var eachPokemon = tabPokemon.map((elem) => elem.name);
        var eachPokemon = tabPokemon.map((elem) => elem.id);

        //fonctionne pas
        //var tmp = elem.id;
        // console.log("eleme.name: ", typeof elem.id);
        // console.log("eleme.name: ", tmp);

        console.log("eachPokemon: ", eachPokemon);

        // var catchPokemon = eachPokemon.filter(num => eachPokemon[0].num); 


        var elem = process.argv[2];

        if (elem <= eachPokemon.length && elem != 0) {
            console.log(eachPokemon[elem - 1]);
        } else {
            console.log("Error... Choose a value between: " + 1 + " and " + (eachPokemon.length));
        }

        catchPokemon("the name of the pokemon is: ", process.argv[2]);
        // catchPokemon (6);
    })
}
catchPokemon()