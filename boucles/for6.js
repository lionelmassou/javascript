// ENCORE DES BOITES
// ?????

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log("box1", box1 + i);
        box2++;
    } else {
        // console.log("box2", box2 + i);
        box1--;
    }
}

console.log("box1 final",box1);
// console.log("box2 final",box2);
// console.log(i);