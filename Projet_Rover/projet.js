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
        console.log("je suis tourné vers l'ouest");
    }

    else if (rover.direction === "W") {

        rover.direction = "S"
        console.log("je suis tourné vers le sud");
    }

    else if (rover.direction === "S") {

        rover.direction = "E"
        console.log("je suis tourné vers l'est");
    }

    else if (rover.direction === "E") {

        rover.direction = "N"
        console.log("je suis tourné vers le nord");
    }
}

function turnRight(rover) {

    if (rover.direction === "N") {

        rover.direction = "E"
        console.log("je suis tourné vers l'est");
    }

    else if (rover.direction === "E") {

        rover.direction = "S"
        console.log("je suis tourné vers le sud");
    }

    else if (rover.direction === "S") {

        rover.direction = "W"
        console.log("je suis tourné vers l'ouest");
    }

    else if (rover.direction === "W") {

        rover.direction = "N"
        console.log("je suis tourné vers le nord");
    }
}

// FAISONS AVANCER LE ROVER

function moveFoward(rover) {

    if (rover.direction === "N") {

        rover.x++
        console.log("j'avance vers le nord");
    }

    else if (rover.direction === "E") {

        rover.y++
        console.log("j'avance vers l'est");
    }

    else if (rover.direction === "S") {

        rover.x++
        console.log("j'avance vers le sud");
    }

    else if (rover.direction === "W") {

        rover.y++
        console.log("j'avance vers l'ouest");
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

            moveFoward(rover);
            rover.travelog.push([rover.x, rover.y]);
            console.log(rover.travelog);
    
        }
        else {
            console.log("error");
        }
    }
}

pilotRover("fflrrffl");




rover.travelog = (rover.x, rover.y) 


function displayPrompt() {
    prompt.get({ pilotRover: "Pilot Rover", description: "Entrez une direction avec les lettres l,f,r" },

        function (err, res) {
            if (err) {
                return onErr(err);
            }
            else {
                (res.pilotRover)
            }

        })
}
displayPrompt()