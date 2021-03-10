// REVERSE
// afficher ("! oixenoK olleH")
var sentence = "Hello Konexio !"
var newtab = [];


for (var i=sentence.length-1; i>=0; i--){
    newtab.push(sentence[i]);
}
 console.log(newtab.join(""));