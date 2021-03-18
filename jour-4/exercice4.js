// COMPARE

function compare (num1, num2) {
    if (num1>num2){
        console.log(num1, " is bigger");
        // return num1
    } else if ( num2>num1) {
        console.log(num2, " is bigger")
        // return num2 
    } else {
        console.log("both are the same")
        // return "both are the same";
    }
}

compare (5, 4);
compare (2, 6);
compare (6, 6);