//Créez deux variables `ussainBolt` et `tysonGay` valant 0

//Tant que l'une des deux variables n'a pas dépassé 100 

//Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la premiere variable et le deuxieme à la deuxieme

//Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier)

var ussainBolt = 0;
var tysonGay = 0;
var min = 1;
var max = 10;

var sumUssain = 0;
var sumTyson = 0;

while (sumUssain < 100 && sumTyson < 100) {

    ussainBolt = Math.floor(Math.random() * (max - min + 1) + min);
    sumUssain = sumUssain + ussainBolt;
    // console.log("le cumul de point de Bolt: ", sumUssain)
    // console.log("valeur de Usain", ussainBolt);

    tysonGay = Math.floor(Math.random() * (max - min + 1) + min);
    sumTyson = sumTyson + tysonGay;
    // console.log("le cumul de point de Tyson: ", sumTyson)
    // console.log("valeur de Tyson", tysonGay);
}

if (sumUssain < sumTyson){
    console.log("Tu n'es plus aussi rapide qu'avant mon pauvre Usain")
} else {
    console.log("I'm still The Flash")
}

