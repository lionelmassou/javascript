// CALCULATOR

function calculate (num1, num2, parm) {
    if (parm === "+") return num1+num2;
    if (parm === "*") return num1*num2;
    if (parm === "/") return num1/num2;
    if (parm === "-") return num1-num2;
}

console.log("la somme est: ", calculate(2,3, "+"));
console.log("le produit est: ", calculate(5,4, "*"));
console.log("la division est: ", calculate(2,3, "/"));
console.log("la soustraction est: ", calculate(2,3, "-"));
