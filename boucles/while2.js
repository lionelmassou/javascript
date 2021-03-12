// TRY AGAIN

var dice = null;
var count = 0;
var min = 1;
var max = 6;


while (dice !== 6) {
    dice = Math.floor(Math.random()*(max - min +1) + min);
    count = count +1;
    console.log("valeur de dice dans la boucle: ", dice);
}
console.log("le nombre de tour de lancé de dés: ", count);
console.log("le Dice de fin de boucle est: ", dice);
