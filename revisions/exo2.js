// XOXO

function countEach(str) {

    var valX = 0;
    var valO = 0;

    for (var i = 0; i < str.length; i++) {
        // console.log(str.charAt[i]);

        if (str.charAt(i) === "x") {

            valX = valX + 1;
            console.log("valX = ", valX);
        } else {
            valO = valO + 1;
            console.log("valO = ", valO);

        }
    }

    console.log(valX);
    console.log(valO);


    if (valX === valO) {
        console.log(true);
    } else {
        console.log(false);
    }

}

// countEach("xoox");
countEach("xox");
// countEach("xoooxx");


