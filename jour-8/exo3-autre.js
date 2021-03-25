

var request = require ("request");

function catchPokemon (id) {
    request.get("https://pokeapi.co/api/v2/pokemon/" + id , function (err, res, body) {

        // console.log("body", JSON.parse(body));

        var pokemon = JSON.parse(body);

        console.log(pokemon.name);

    })
}
catchPokemon(10001)