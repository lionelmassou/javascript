// CHANCEUX

var sumDice = 0;
var resultDice = 0;

for (var i=0; i < 20; i++) {
    resultDice = Math.floor(Math.random()*7);
    if (resultDice >= 5){
        sumDice = sumDice + 1;
    }

} console.log(sumDice);