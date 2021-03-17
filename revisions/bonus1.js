// BONUS

function makeItSpongeBob(str) {
    var word = [];
    if (str[0] == str[0].toLowerCase()) {
        for (var i = 0; i < str.length; i++) {
            word[i] = str[i].toUpperCase();
            
        }
    } else {
        console.log("error");
    }
    console.log(word.join(""));
}
makeItSpongeBob("javascript is easy");


    //     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
    //         word[i] = str.charAt(i).toLowerCase();
    //         console.log("word if: ", word)
    //     } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
    //         word[i] = str.charAt(i).toUpperCase();
    //        console.log("word else: ", word)

    //     }
    // }