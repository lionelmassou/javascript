// COUNTRIES

var request = require("request");

var countriesNames = [];
console.log("1");
request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    countriesNames = JSON.parse(body);
    console.log("2");
    // console.log("country: ", typeof countriesNames)

    // console.log("country: ", countriesNames.length)

    var getCountries = countriesNames.map((elem) => elem.name);
    console.log(typeof getCountries);
    console.log("3");
    // console.log(getCountries.join("-"));
    console.log("4");
})
