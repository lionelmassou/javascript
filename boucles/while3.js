// COURSE

var ussainBolt = 0
var tysonGay = 0;

var sumBolt = 0;
var sumGay = 0;

while (ussainBolt <= 100 || tysonGay <= 100) {
    sumBolt = Math.floor(Math.random() * 11);
    sumGay = Math.floor(Math.random() * 11);

    ussainBolt = ussainBolt + sumBolt;
    tysonGay = tysonGay + sumGay;
}

if (ussainBolt > tysonGay) {
    console.log("USAIN BOLT is the WINNER with: ", ussainBolt, "vs", tysonGay);
} else {
    console.log("TYSON GAY is the WINNER with: ", tysonGay, "vs", ussainBolt );
}

// var sumBolt = Math.floor(Math.random() * 11);
// console.log(sumBolt)