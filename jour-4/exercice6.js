// TIME

function format(num) {

    var heures = 0;
    var minutes = 0;
    var secondes = 0;

    if (num > 3600) {
        minutes = num % 3600;
        heures = Math.floor(num / 3600);
        if (minutes > 60) {
            secondes = minutes % 60;
            minutes = Math.floor(minutes / 60);
            console.log(heures, " : ", minutes, " : ", secondes)

        } else {
            console.log(heures, " : ", minutes, " : ", secondes)
        }
    } else if (num <= 3600) {
        secondes = minutes % 60;
        minutes = Math.floor(minutes / 60);
        console.log(heures, " : ", minutes, " : ", secondes)

    } else {
        console.log(heures, " : ", minutes, " : ", secondes)
    }

    // console.log(heures, " : ", minutes, " : ", secondes)
}

format(3700);
format(60);
format(3600);
format(1);
format(500);
