// BONUS 2 alphabet

function sortLetters (str) {
    var tab = str.split("");
    // console.log(tab);
    // tab.sort();

    tab.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
    
    return tab.join("");
    // console.log(tab);
}

console.log(sortLetters("KoNexio")); // retourne "eiknoox"