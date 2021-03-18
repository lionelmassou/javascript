// TIME

function format(num) {

    var restH = num % 3600;
    var restS = restH % 60;

    var heures = (num - restH) / 3600;
    var minutes = (restH - restS) / 60;
    var secondes = restS;

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