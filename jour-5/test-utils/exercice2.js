// TABLE

function multiply(num) {

    var table = 0;
    if (num) {
        for (var i = 1; i <= 10; i++) {

            table = num * i;

            console.log("le produit de ", num, "par", i, "est: ", table)
        }

    } else {

        console.log("error")
    }

}
multiply(process.argv[2]);

// console.log(multiply(8));