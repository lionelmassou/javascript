// OBJECT

// 1ER CAS
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}

console.log(cat);

if ((cat.hasOwnProperty("isCute") === true) && (cat.isCute === true)) {
    console.log("So cute !!!")
}

// 2ER CAS avec isCute = false
var cat = {
    name: "Garfield",
    age: 3,
    isCute: false,
}

console.log(cat);

if ((cat.hasOwnProperty("isCute") === true) && (cat.isCute === true)) {
    console.log("So cute !!!")
} else {
    console.log("BEURK !!!")
}

// 3ER CAS sans isCute dans la cat

var cat = {
    name: "Garfield",
    age: 3,
    // isCute: true,
}

console.log(cat);

if ((cat.hasOwnProperty("isCute") === true) && (cat.isCute === true)) {
    console.log("So cute !!!")
} else {
    console.log("BEURK !!!")
}