// CALCULATOR

function calculate(num1, num2, parm) {
    if (isNaN(num1) || isNaN(num2) || parm === undefined) return "Mettez bien les 3 paramètres svp: 2 entiers et 1 opérateur"
    else if (parm === "+") return num1 + num2;
    else if (parm === "*") return num1 * num2;
    else if (parm === "/") return num1 / num2;
    else if (parm === "-") return num1 - num2;
    else if (parm === "%") return num1 % num2;

}



firstnum1 = parseInt(process.argv[2])
secondnum2 = parseInt(process.argv[3])
thirdparm = process.argv[4]

// if (thirdparm == "+") console.log(calculate(firstnum1 + secondnum2));
// if (thirdparm == "-") console.log(calculate(firstnum1 - secondnum2));
// if (thirdparm == "*") console.log(calculate(firstnum1 * secondnum2));
// if (thirdparm == "/") console.log(calculate(firstnum1 / secondnum2));

// console.log("la somme est: ", calculate(2,3, "+"));
// console.log("le produit est: ", calculate(5,4, "*"));
// console.log("la division est: ", calculate(2,3, "/"));
// console.log("la soustraction est: ", calculate(2,3, "-"));

console.log(calculate(firstnum1, secondnum2, thirdparm));
