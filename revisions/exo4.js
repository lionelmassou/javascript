// SWAP
// Créez une fonction `swap` qui reçoit une string en paramètre
// La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

function swap(str) {
    var word = [];
    for (var i = 0; i < str.length; i++) {
    
        if (str[i] == str[i].toLowerCase()) {
            word[i] = str[i].toUpperCase();
        } else {
            word[i] = str[i].toLowerCase();
        }
        
   }
   console.log(word.join(""));
} 

swap("HeLlo World");

    