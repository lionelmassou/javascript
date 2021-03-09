// BONUS III

// TEST 1
var roundedNumber = 3.6;


console.log("valeur à obtenir TEST1: " + Math.round(roundedNumber));

if (Math.ceil(roundedNumber)-roundedNumber < 0.5) {
    console.log("résultat1: " + Math.ceil(roundedNumber));
} else {
    console.log("résultat1: " + Math.floor(roundedNumber));
}

// TEST 2
var roundedNumber = 3.3;

console.log("valeur à obtenir TEST2: " + Math.round(roundedNumber));

if (Math.ceil(roundedNumber)-roundedNumber < 0.5 && (Math.floor(roundedNumber))-roundedNumber <= 0) {
    console.log("résultat2: " + Math.ceil(roundedNumber));
} else {
    console.log("résultat2: " + Math.floor(roundedNumber));
}

// TEST 3
var roundedNumber = 3.8;

console.log("valeur à obtenir TEST3: " + Math.round(roundedNumber));

if (Math.ceil(roundedNumber)-roundedNumber < 0.5 && (Math.floor(roundedNumber))-roundedNumber <= 0) {
    console.log("résultat3: " + Math.ceil(roundedNumber));
} else {
    console.log("résultat3: " + Math.floor(roundedNumber));
}

// TEST 4
var roundedNumber = 12.4;

console.log("valeur à obtenir TEST4: " + Math.round(roundedNumber));

if (Math.ceil(roundedNumber)-roundedNumber < 0.5 && (Math.floor(roundedNumber))-roundedNumber <= 0) {
    console.log("résultat4: " + Math.ceil(roundedNumber));
} else {
    console.log("résultat4: " + Math.floor(roundedNumber));
}

// METHODE CHAINE DE CHARACTER

var roundedNumber = 3.3;
console.log("valeur à obtenir TEST1: " + Math.round(roundedNumber));

var roundedString = roundedNumber.toString()

// console.log(roundedString.charAt(2)+1);

if (roundedString.charAt(2)>="0.5") {
    console.log("résultat1bis: " + (roundedString.charAt(0)+1));
}
