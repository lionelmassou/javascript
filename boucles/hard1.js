// SUM

var numbers = [];
var min = 0;
var max = 100;
var valeur;
var sum = 0;
var sum2 = 0;
for (var i = 1; i <= 50; i++) {
    valeur = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(valeur);
    sum = sum + valeur;
}

for (var j=0; j<numbers.length; j++) {
    sum2 = sum2 + numbers[j];
}
console.table(numbers);
console.log("la somme des valeurs via 1er for est de: ", sum);
console.log("la somme des valeurs via 2e for est de: ", sum2);