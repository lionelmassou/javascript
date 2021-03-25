// COUNTRIES

var request = require("request");

function getCountries() {

var countriesNames = [];
console.log("1");
request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    countriesNames = JSON.parse(body);
    console.log("2");
    // console.log("country: ", typeof countriesNames)

    // console.log("country: ", countriesNames.length)

    var allCountries = countriesNames.map((elem) => elem.name);
    console.log(typeof allCountries);
    console.log("3");
    console.log(allCountries.join(" - "));
    console.log("4");
})
}

getCountries()