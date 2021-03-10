// BONUS IV

var tab =[];
// var randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
var max = 100;
var min = 0;
var valeurMax = 0;
for (var i = 0; i< 20; i++){

    tab.push(Math.floor(Math.random() * (max - min +1)) + min);
}
// console.log(tab);

for (var j=0; j<20; j++) {
    if(tab[j]>valeurMax){
        valeurMax=tab[j];
    }    
}

console.log(tab);
console.log("la valeur max du tableau est: " + valeurMax);