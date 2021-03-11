// BONUS II

function launchDice (numberOfDice) {
    var resultat = 0;

    for (var i=1; i<numberOfDice; i++) {
        var launch =Math.floor(Math.random()*7);
        resultat = resultat + launch;
    }

    return resultat;
}

var player1 = launchDice(5);
var player2 = launchDice(5);

if (player1 > player2) {
    console.log("the winner is player1 with ", player1);
} else if (player2 > player1) {
    console.log("the winner is player2 with ", player2);
} else {
    console.log("draw game");
}
