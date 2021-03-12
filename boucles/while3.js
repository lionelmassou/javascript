// COURSE

var ussainBolt = 0
var tysonGay = 0;

var sumBolt = 0;
var sumGay = 0;

var min = 1;
var max = 10;

while (ussainBolt < 100 && tysonGay < 100) {
    sumBolt = Math.floor(Math.random()*(max - min +1) + min);
    sumGay = Math.floor(Math.random()*(max - min +1) + min);

    ussainBolt = ussainBolt + sumBolt;
    tysonGay = tysonGay + sumGay;
}

if (ussainBolt > tysonGay) {
    console.log("USAIN BOLT is the WINNER with: ", ussainBolt, "vs", tysonGay);
} else {
    console.log("TYSON GAY is the WINNER with: ", tysonGay, "vs", ussainBolt );
}

// var sumBolt = Math.floor(Math.random()*(max - min +1) + min);
// console.log(sumBolt);