// AUTRES BOITES

// FAIS LA SOMME DE LA BOX1 avec les valeurs précédente 
//de BOX 1 et de i, sachant que cette derniere se  
//décompte de 3 à chaque tour de boucle.

var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);