//PROJET ROVER
var prompt = require("prompt");


var grille = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelog: [],
};

// DETERMINER LES DIRECTIONS

function turnLeft(rover) {

    if (rover.direction === "N") {

        rover.direction = "W"
        console.log(rover + "Tourné vers l'ouest")
    }

    else if (rover.direction === "W") {

        rover.direction = "S"
        console.log(rover + "Tourné vers le sud")
    }

    else if (rover.direction === "S") {

        rover.direction = "E"
        console.log(rover + "Tourné vers l'est")
    }

    else if (rover.direction === "E") {

        rover.direction = "N"
        console.log(rover + "Tourné vers le nord")
    }
}

function turnRight(rover) {

    if (rover.direction === "N") {

        rover.direction = "E"
        console.log(rover + "Tourné vers l'est")
    }
    else if (rover.direction === "E") {

        rover.direction = "S"
        console.log(rover + "Tourné vers le sud")
    }

    else if (rover.direction === "S") {

        rover.direction = "W"
        console.log(rover + "Tourné vers l'ouest")
    }

    else if (rover.direction === "W") {

        rover.direction = "N"
        console.log(rover + "Tourné vers le nord")
    }
}


// FAISONS AVANCER LE ROVER

function moveFoward(rover) {

    if ((rover.x < 0 || rover.x > 10) && (rover.y < 0 || rover.y > 10)) {
        console.log("Vous partez hors-limit,entré une autre direction")

    } else {
        if (rover.direction === "N") {
            // rover.y--;
            rover.x--
            console.log(rover + "Avance vers le nord")
        }

        else if (rover.direction === "E") {
            // rover.x++;
            rover.y++
            console.log(rover + "Avance vers l'est")
        }

        else if (rover.direction === "S") {
            // rover.y++;
            rover.x++
            console.log(rover + "Avance vers le sud")
        }

        else if (rover.direction === "W") {
            // rover.x--;
            rover.y--
            console.log(rover + "Avance vers l'ouest")
        }
    }
}

function moveBackward(rover) {

    if ((rover.x < 0 || rover.x > 10) || (rover.y < 0 || rover.y > 10)) {
        console.log("Vous partez hors-limit,entré une autre direction")

    } else {
        if (rover.direction === "N") {

            // rover.y++;
            rover.x++
            console.log(rover + "Recule vers le sud")
        }

        else if (rover.direction === "E") {
            // rover.x--;
            rover.y--
            console.log(rover + "Recule vers l'ouest")
        }

        else if (rover.direction === "S") {
            // rover.y--;
            rover.x--
            console.log(rover + "Recule vers le nord")
        }

        else if (rover.direction === "W") {
            // rover.x++;
            rover.y++
            console.log(rover + "Recule vers l'est")
        }
    }
}

// OUTIL DE COMMANDE
function pilotRover(string) {


    for (let i = 0; i < string.length; i++) {


        if (string[i] === "l") {

            turnLeft(rover);

            // grille[rover.y][rover.x] = rover.direction;
            grille[rover.x][rover.y] = rover.direction;
            console.log(grille.join('\n'));

        } else if (string[i] === "r") {

            turnRight(rover);

            // grille[rover.y][rover.x] = rover.direction;
            grille[rover.x][rover.y] = rover.direction;
            console.log(grille.join('\n'));

        }
        else if (string[i] === "f") {

            // remplacement de l'ancienne position

            // grille[rover.y][rover.x] = "~";
            grille[rover.x][rover.y] = "~";

            moveFoward(rover);
            // nouvelle valeur de position
            rover.travelog.push([rover.x, rover.y]);
            console.log(rover.travelog);

            // nouvelle position
            // grille[rover.y][rover.x] = rover.direction;
            grille[rover.x][rover.y] = rover.direction;
            console.log(grille.join('\n'));

        }
        else if (string[i] === "b") {

            // grille[rover.y][rover.x] = "~";
            grille[rover.x][rover.y] = "~";

            moveBackward(rover);

            rover.travelog.push([rover.x, rover.y]);
            console.log(rover.travelog);

            // grille[rover.y][rover.x] = rover.direction;
            grille[rover.x][rover.y] = rover.direction;
            console.log(grille.join('\n'));

        }
        else {
            // ARRET DU PILOTAGE SI MAUVAISE DIRECTION

            console.log("Wrong letter for the direction");
            console.log("previous moves in memory: ", rover.travelog);

            // grille[rover.y][rover.x] = rover.direction;
            grille[rover.x][rover.y] = rover.direction;
            console.log(grille.join('\n'));

            return
        }

    }
}


function displayPrompt() {
    prompt.get(["pilot"],

        function (err, res) {
            if (err) {
                return onErr(err);
            }
            else {
                console.log(res.pilot)
                pilotRover(res.pilot)
                
                // displayPrompt()
            }

        })
}

displayPrompt()