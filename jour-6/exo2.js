// AGE

function calculateAge(str) {
    //format aaaa-mm-jj
    var born = new Date(str);
    console.log(born);
    // var year = born.getFullYear();
    // console.log("année de naissance", year);

    // var month = born.getMonth();
    // console.log("mois de naissance", month+1);

    // var day = born.getDate();
    // console.log("jour de naissance", day);

    var diff = Date.now() - born.getTime();
    // get.time => e nombre de millièmes de secondes entre 
    //le 1 janvier 1970 à 00:00:00 UTC et la date indiquée
    console.log("diff", diff);

    var age = new Date(diff);
    console.log("l'age est de: ", age);

    console.log("j'ai actuellement", Math.abs(age.getUTCFullYear() - 1970), "ans");

}

calculateAge("1989-10-15");

// calculateAge(process.argv[2]);