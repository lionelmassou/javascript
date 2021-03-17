// UNIQUE

var numbers = [];
var min = 50;
var max = 200;


for (var i = 1; i <= 50; i++) {
    valeur = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(valeur);
}

var j = numbers.length-1;
var tmp = 0;

while (j--) {
    if (numbers[j] > 75 && numbers[j] <= 100){
        tmp = numbers[j];
    }
}


console.log(numbers);
console.log(tmp)