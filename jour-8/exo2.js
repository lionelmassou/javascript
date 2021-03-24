// CHUCK NORRIS

var request = require("request");
console.log("test1");

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
    console.log("test2");

    // var joke = JSON.parse(body).value;
    // console.log("joke: ", joke);

    function getFact(joke) {
        var joke = JSON.parse(body).value;
        console.log("the joke: ", joke);
        console.log("test3");
    }
    getFact();
})

console.log("test4");

