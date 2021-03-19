// le tableau à trier
var list = "Konexio";
var liste = list.split("");

// Création d'objet temporaire qui contient les positions
// et les valeurs en minuscules
var mapped = liste.map(function(e, i) {
    var tmp = { index: i, value: e.toLowerCase() };
    console.log(tmp);
  return tmp;
})
// // on trie l'objet temporaire avec les valeurs réduites
// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// // on utilise un objet final pour les résultats
// var result = mapped.map(function(e){
//   console.log(liste[e.index]);
// });