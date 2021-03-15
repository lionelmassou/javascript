// ALPHABET

function sortLetters (str) {
    var tab = str.split("");
    
    tab.sort();
    
    return tab.join("");
    // console.log(tab);
}

console.log(sortLetters("Konexio"));