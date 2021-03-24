// CHUCK NORRIS

var request = require("request");
console.log("test1");

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
    console.log("test2");
    
    var joke = JSON.parse(body);
    console.log(joke.value);

})
console.log("test3");
