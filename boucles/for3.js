// CHANCEUX

var sumDice = 0;
var resultDice = 0;
var min = 1;
var max = 6;

for (var i=0; i < 20; i++) {
    resultDice = Math.floor(Math.random()*(max - min + 1) + min);
    if (resultDice >= 5){
        sumDice = sumDice + resultDice;
    }

} console.log(sumDice);