// BONUS 

var min = 1;
var max = 6;
var random = Math.round(Math.random()*(max-min+1) + min);

console.log("valeur de random: " + random);
if (random === 6){
    console.log("Yes I win !");
} else {
    console.log("So close...");
}