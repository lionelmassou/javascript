// GUESS

var prompt = require("prompt");

mysteryNum = Math.floor(Math.random() * 100) + 1
console.log(mysteryNum)

    prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

function displayPrompt() {
prompt.get(["userNumber"], function (err, res) {
    if (err) {
        return onErr(err);
    }

    console.log(mysteryNum)

    if (res.userNumber < mysteryNum) {
        console.log("Cherche plus grand.")
        displayPrompt()
    } else if (res.userNumber > mysteryNum) {
        console.log("Cherche moins grand.")
        displayPrompt()
    }
    else{
        console.log("Bingo Genius!")
    }


    console.log(res.userNumber)


})
}
displayPrompt()