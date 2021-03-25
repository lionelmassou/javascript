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

// console.log(grille.join('\n') + '\n\n');
// console.log(grille.length);

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

    if (rover.direction === "N") {

        rover.x++
        console.log(rover + "Avance vers le nord")
    }

    else if (rover.direction === "E") {

        rover.y++
        console.log(rover + "Avance vers l'est")
    }

    else if (rover.direction === "S") {

        rover.x++
        console.log(rover + "Avance vers le sud")
    }

    else if (rover.direction === "W") {

        rover.y++
        console.log(rover + "Avance vers l'ouest'")
    }
}

// OUTIL DE COMMANDE
function pilotRover(string) {


    for (let i = 0; i < string.length; i++) {
        if (string[i] === "l") {


            turnLeft(rover)

        } else if (string[i] === "r") {

            turnRight(rover)

        }
        else if (string[i] === "f") {

            moveFoward(rover)
            rover.travelog.push([rover.x, rover.y])
            console.log(rover.travelog)


        }

        else {
            console.log("Wrong letter")
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
            }

        })
}
displayPrompt()

