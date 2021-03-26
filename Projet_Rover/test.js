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

// POSITION ROVER DE DEPART

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelog: [],
};

// console.log(grille.join('\n') + '\n\n');
// grille[rover.x][rover.y] = rover.direction;
// console.log(grille.join('\n'));


// DETERMINER LES DIRECTIONS VERS LA GAUCHE/ VERS LA DROITE

function turnLeft(rover) {

    if (rover.direction === "N") {

        rover.direction = "W";
        console.log("rover a " + "Tourné vers l'ouest");
    }

    else if (rover.direction === "W") {

        rover.direction = "S";
        console.log("rover a " + "Tourné vers le sud");
    }

    else if (rover.direction === "S") {

        rover.direction = "E";
        console.log("rover a " + "Tourné vers l'est");
    }

    else if (rover.direction === "E") {

        rover.direction = "N";
        console.log("rover a " + "Tourné vers le nord");
    }
}

function turnRight(rover) {

    if (rover.direction === "N") {

        rover.direction = "E";
        console.log("rover a " + "Tourné vers l'est");
    }
    else if (rover.direction === "E") {

        rover.direction = "S";
        console.log("rover a " + "Tourné vers le sud");
    }

    else if (rover.direction === "S") {

        rover.direction = "W";
        console.log("rover a " + "Tourné vers l'ouest");
    }

    else if (rover.direction === "W") {

        rover.direction = "N";
        console.log("rover a " + "Tourné vers le nord");
    }
}


// FAISONS AVANCER LE ROVER

function moveFoward(rover) {

    // DEFINIR LES LIMITES AU ROVER

    if ((rover.x < 0 || rover.x > 10) || (rover.y < 0 || rover.y > 10)) {

        console.log("OFF LIMITE, Nous n'allons pas effectuer le déplacement");

    }
    else {

        if (rover.direction === "N") {

            rover.x--;
            // rover.x++;
            console.log("rover a " + "Avancé vers le nord");
        }

        else if (rover.direction === "E") {

            rover.y++;
            // rover.y++;
            console.log("rover a " + "Avancé vers l'est");
        }

        else if (rover.direction === "S") {

            rover.x++;
            // rover.x++;
            console.log("rover a " + "Avancé vers le sud");
        }

        else if (rover.direction === "W") {

            rover.y--;
            // rover.y++;
            console.log("rover a " + "Avancé vers l'ouest'");
        }

    }
}

// FAISONS RECULER LE ROVER

function moveBackward(rover) {

    // DEFINIR LES LIMITES AU ROVER
    // (x > 10 ou x < 0) ou (y > 10 ou y< 0)
    if ((rover.x <= 0 || rover.x > 10) || (rover.y < 0 || rover.y > 10)) {

        console.log("OFF LIMITE, Nous n'allons pas effectuer le déplacement");

    }
    else {
        if (rover.direction === "N") {

            rover.x++;
            // rover.x--;
            console.log("rover a " + "Reculé vers le sud");
        }

        else if (rover.direction === "E") {

            rover.y--;
            // rover.y--;
            console.log("rover a " + "Reculé vers l'ouest");
        }

        else if (rover.direction === "S") {

            rover.x--;
            // rover.x--;
            console.log("rover a " + "Reculé vers le nord");
        }

        else if (rover.direction === "W") {

            rover.y++;
            // rover.y--;
            console.log("rover a " + "Recule vers l'est");
        }
    }
}

// OUTIL DE COMMANDE ET AFFICHAGE DE GRILLE

function pilotRover(string) {

    // console.log(grille.join('\n') + '\n\n');
    // grille[rover.x][rover.y] = rover.direction;
    // console.log(grille.join('\n'));


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
            rover.travelog.push([rover.x,rover.y]);
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

            rover.travelog.push([rover.x,rover.y]);
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

// UTILISATION DU PROMPT POUR SOLLICITER L'UTILISATEUR

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


