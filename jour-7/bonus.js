// BONUS : LE PENDU

// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","z"];
var mysteryWord = ["b", "o", "n", "j", "i", "o", "u", "r", "n", "o"];
var result = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
var letterPropose = "";

var letterFind = 0;
var numberOfTry = 10;


while (letterFind != mysteryWord.length && numberOfTry > 0) {
    for (var i = 0; i < result.length; i++) {
        letterPropose = letterPropose + mysteryWord[i] + " ";
    }

    for (var i = 0; i<mysteryWord.length; i++){
        if(mysteryWord[i]==)
    }
}
console.log(letterPropose);
