// POKEMON

var request = require("request");

console.log("test1");

request.get("https://pokeapi.co/api/v2/pokemon/", function (err, res, body) {
    console.log("test2");

    var allPokemon = JSON.parse(body);
    // console.log("allPokemon: ", typeof allPokemon);

    var tabPokemon = allPokemon.results;
    // console.log("tabPokemon: ", tabPokemon);

    var eachPokemon = tabPokemon.map((elem) =>elem.name);
    // console.log("eachPokemon: ", eachPokemon);

    var id

})


// var onlyCountries = countriesNames.map((elem) => elem.name);
//     console.log(typeof onlyCountries);
//     console.log(onlyCountries.join("-"));