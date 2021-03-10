// REVERSE
// afficher ("! oixenoK olleH")
var sentence = "Hello Konexio !"
var tab = sentence.split("");
var newtab;
// console.log(tab);

for (var i=tab.length-1; i>=0; i--){
    newtab = tab[i].split("").join("");
    // newtab=newtab[i];
    // console.log(newtab);
}
console.log(newtab)