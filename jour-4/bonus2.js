// BONUS II

function launchDice(numberOfDice) {
    var resultat = 0;

    for (var i = 1; i <= numberOfDice; i++) {
        // var launch = Math.floor(Math.random() * 7);
        var launch = Math.floor(Math.random() * 6) + 1;
        // console.log("les valeurs obtenues", launch)

        resultat = resultat + launch;
    }

    return resultat;
}

var player1 = launchDice(5);
var player2 = launchDice(5);

if (player1 > player2) {
    console.log("the winner is player1 with ", player1, "vs the ", player2, " of player2");
} else if (player2 > player1) {
    console.log("the winner is player2 with ", player2, "vs the ", player1, " of player2");
} else {
    console.log("draw game... Maybe try another round ^^");
}
