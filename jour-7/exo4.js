// FILTER NUMBER
// ça fonctionne mais je ne suis pas convaincu

var array = [1, "toto", 34, "javascript", 8, true, NaN, -1];

var numbers = array.filter(function (parm) {
    
    if (typeof parm === "number") {
        return parm 
    }
});

console.log(numbers);

// var test1 = "toto"*2;
// console.log(test1)
// var test2 = "toto"+2;
// console.log(test2)
// var test3 = "toto"/2;
// console.log(test3)

// if ("toto" <= 0){
//     console.log("true");
// } else{
//     console.log("error");
// }
