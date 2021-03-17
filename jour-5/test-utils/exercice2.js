// TABLE

function multiply(num) {

    var table = 0;
    if (num) {
        for (var i = 1; i <= 10; i++) {
            table = num * i;
            console.log("le produit de ", num, "par", i, "est: ", table);
        }
    } else {
        return "error"
    }

}
multiply(process.argv[2]);

console.log ();

// ADDITION

function addition (num) {

    var summ = 0;
    if (num) {
        for (var i = 1; i <= 10; i++) {
            summ = summ + i;
            console.log("la somme de ", num, "et", i, "est: ", summ)
        }
    } else {
        return "error"
    }
}
addition(process.argv[2]);

module.exports = {
    multiply,
    addition,
  };