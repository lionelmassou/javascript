// MAX

var numbers = [];
var min = 50;
var max = 200;
var valeur;
var valMax = 0;
var numMax;


for (var i = 1; i <= 50; i++) {
    valeur = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(valeur);
}

varMax= numbers[0];
for (var j = 0; j < numbers.length; j++) {
  numMax = numbers[j];

    if (varMax < numMax) {
        varMax = numMax;
    }
}

console.table(numbers);
console.log(varMax);