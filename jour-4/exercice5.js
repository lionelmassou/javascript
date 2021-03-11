// ADD UP

function addUp(num) {
    var result = 0;

    for (i = 1; i <= num; i++) {
        result = i + result;
    }
    console.log(result);
}

addUp(12);
addUp(2);
addUp(10);