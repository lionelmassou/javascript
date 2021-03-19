// ALPHABET

function sortLetters (str) {
    var tab = str.split("");
    console.log(tab);
    tab.sort();
    
    return tab.join("");
    // console.log(tab);
}

console.log(sortLetters("konexio")); // retourne "eiknoox"