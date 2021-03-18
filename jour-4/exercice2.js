// COMBINE

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}

var cat2 = {
    name: "Donald",
    age: 5,
    isCute: false,
    // hobby: ["football", "videos games", "coding"],
}

var cats = [cat, cat2];
console.log(cats);
// console.table(cats);

console.log("valeur de age de cat est: ", cat.age);
console.log("valeur de age de cat est: ", cats[0].age);

console.log("valeur de isCute de cat2 est: ", cat2.isCute);
console.log("valeur de isCute de cat2 est: ", cat2["isCute"]);
console.log("valeur de isCute de cat2 est: ", cats[1].isCute);
console.log("valeur de isCute de cat2 est: ", cats[1]["isCute"]);