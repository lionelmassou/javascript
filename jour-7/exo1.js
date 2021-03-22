// FILE SYSTEM

var fs = require("fs");

console.log("on va afficher ce qui est contenu dans jour07.txt");

fs.readFile("./jour07.txt", function (err, data) {
    if (err){
        return console.error(err);
    }

    console.log("Lecture après conversition en string: ",data.toString());
})