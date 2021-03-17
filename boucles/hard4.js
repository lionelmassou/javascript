// // NESTED LOOP

var words = ["hello", "goodbye", "yoes", "no", "ostop", "go go go"];
var tempArray = [];
var countO = 0;

for (var i = 0; i <= words.length - 1; i++) {
    // console.log(words[i].split(""))

    tempArray = words[i].split(" ").join("").split(""); // pour effacer les espaces, pas obligatoire

    console.log(tempArray);

    for (var j = 0; j <= tempArray.length - 1; j++) {
        // console.log("2eme boucle", tempArray[j]);

        if (tempArray[j] == "o") {
            // countO++;
            countO = countO + 1;
        }
    }
}

console.log("final result", countO);

// var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
// var tab = [];
// var count = 0;
// // var newTab1 = words.join("");
// // var newTab2 = newTab1.replace(/ /g,"");
// // var newTab = newTab2.split();

// for (var i = 1; i <= words.length; i++) {
//     tab = words[i].split("");
//     console.log(tab);

//     for (var j = 1; j<= tab; j++) {

//         console.log(tab[j]);

//         if (tab[j] == "O") {
//             count = count + 1;
//         }
//     }
// }
// console.log(count);

// // console.log(newTab1);
// // console.log(newTab2);
// // console.log(newTab);