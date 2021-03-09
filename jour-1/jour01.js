// JOUR 1

// 01 HELLO WORD //

console.log("Hello World !");

// 02 STRING

var test = "My name is Massou Lionel";
console.log(test);

// 03 CONCATENATION

var name = "Massou"
console.log("Nice to meet you" + " " + name);
console.log(`Nice to meet you ${name}` );

// 04 STRING LENGTH

var testLength = "i'm very long !";
console.log(testLength.length);

// 05 REPLACE

var food = "croissant is meh";
food = food.replace("meh","so good");
console.log(food);

// 06 UP AND DOWN

var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();

console.log(basic, basicDown, basicUp);

// 07 SPLIT

var word = "banana"
var letters = word.split("");
console.log(letters);

// 08 TEMPLATE

var age = "31";
var template = "i'm " +age +" years old";
var template1 = `i'm ${age} years old`;
console.log(template);
console.log(template1);

// BONUS

// version qui fonctionne ponctuellement
// changed1 = changed.replace("o","a");
// changed2 = changed1.replace("o","a");
// console.log(changed2);

//version qui fonctionne tout le temps
 var changed = "Bonjiourno";
changed = changed.replace(/o/g, 'a');
console.log(changed);
