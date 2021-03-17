// PALINDROME

function checkPal(word){
    var sentenceReverse = word.split("").reverse().join('').toLowerCase();
    console.log(sentenceReverse)
    if(word.toLowerCase() == sentenceReverse){
        console.log("true")
    }else {
        console.log("false")
    }
}
checkPal("racecar")



// function checkPal(str) {

//     var tab1 = str.split("");
//     console.log("tab1 avant reverse ", tab1);

//     var tab2 = tab1.reverse();

//     console.log("tab1 apres reverse ",tab1);
//     console.log("tab2 apres reverse ",tab2);

//     // for (var i = 0; i < Math.floor(tab1.length/2); i++) {
//     //     for (var j = 0; j < Math.floor(tab2.length/2) ; j++) {

//     //         if (tab1[i] === tab2[j]) {
//     //             console.log("Palindrome !");
//     //         } else {
//     //             console.log("Nope !");
//     //         }
//     //     }

//     // }

//     for (var i = 0; i < tab1.length; i++) {
//         if (tab1[i] === tab2[tab2.length - 1 - i]) {
//             return "Palindrome !";
//         } else {
//             return "Nope !";
//         }
//     }

// }

// console.log(checkPal("kayakee"));

