var example = require("./external.js");
var {sayHelloInFrench, sayHelloInEnglish} = require("./external.js");

console.log(sayHelloInFrench());

console.log(example);

console.log(example.sayHelloInFrench());
console.log(example.sayHelloInEnglish());