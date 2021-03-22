// FILTER EVEN

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//Methode ES6
var even = numbers.filter((num) => num%2===0);


//Methode ES5
var even = numbers.filter(function (num) {
    return num % 2 === 0;
});

console.log(even);