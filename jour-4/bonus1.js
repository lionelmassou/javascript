// BONUS 1

function generatePassword(num) {
    var password = "";

    if (num < 6 || num > 15) {
        console.log("error");
    } else {
        for (var i = 1; i <= num; i++) {
        
            var rdmNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
            var rdmLetter = String.fromCharCode(rdmNumber);
            password = password + rdmLetter;
        }
        console.log(password);
    }
}
generatePassword(4);
generatePassword(7);
generatePassword(17);