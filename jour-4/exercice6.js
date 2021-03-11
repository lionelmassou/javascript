// TIME

function format(num) {



    var heures = (num - (num % 3600))/3600;
    var minutes = ((num % 3600)-(num % 3600)%60)/60;
    var secondes = (num % 3600) % 60;

    var horaire = heures + ":" + minutes + ":" + secondes;
    return horaire;


}
// 1ere tentative T-T

    // if (num > 3600) {
    //     minutes = num % 3600;
    //     heures = Math.floor(num / 3600);
    //     if (minutes > 60) {
    //         secondes = minutes % 60;
    //         minutes = Math.floor(minutes / 60);
    //         console.log(heures, " : ", minutes, " : ", secondes)

    //     } else {
    //         secondes = minutes % 60;
    //         minutes = Math.floor(minutes / 60);
    //         console.log(heures, " : ", minutes, " : ", secondes)
    //     }
    // } else if (num <= 3600) {
    //     secondes = minutes % 60;
    //     minutes = Math.floor(minutes / 60);
    //     console.log(heures, " : ", minutes, " : ", secondes)

    // } else {
    //     secondes = minutes % 60;
    //     minutes = Math.floor(minutes / 60);
    //     console.log(heures, " : ", minutes, " : ", secondes)
    // }


console.log(format(3700));
console.log(format(3600));
console.log(format(300));
console.log(format(61));