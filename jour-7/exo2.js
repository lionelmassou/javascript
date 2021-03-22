// MAP DOUBLE

var myArray = [1, 2, 3, 4, 5];

//Methode ES5
// var double = myArray.map(function(num) {
//     return num*2;
// });

//Methode ES6
var double = myArray.map((num) => num*2);

console.log("duplicata de myArray avec les valeurs doublées: ", double)