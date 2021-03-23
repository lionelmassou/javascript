// CAKES

var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]


var chocolateCakes = cakes.filter(
    function (item) {
        var isCakeChocolate = item.flavor === "chocolate"
        return isCakeChocolate; // true or false

    }
)
.map(
    function (item) {
        item.status = "sold out !"
        return item;
    }
)

console.log(chocolateCakes)





// var sales = cakes.filter(item => item.flavor === "chocolate").map(item => {
//     if (item.flavor === "chocolate") {
//         item.status = "sold out !";
//     }
//     return item;
// });
// console.log("essai conluant: ", sales);




// FONCTIONNE MAIS NON VALABLE

// var sales = cakes.filter(function(item) {
//     if (item.flavor === "chocolate" && item.name){
//         return item.status = "sold out !"
//     }
// });
// console.log(sales);



// DOC EN LIGNE //options.filter(opt => !opt.assigned).map(opt => someNewObject)

// var sales = cakes.filter(item => item.flavor === "chocolate").map(item =>{
//     sales[item.status] = "sold out !";
//     console.log(sales);
//     return sales;

// })

// var sales1 = cakes.filter(item => item.flavor === "chocolate").map(item => item.status = "sold out !")
// console.log("essai numéro 1: ",sales1);


// var sales2 = cakes.filter(item => item.flavor === "chocolate").map(item =>{
//     var container ={};
//     container.status = "sold out !";
//     return container;
// });
// console.log("essai numéro 2: ", sales2);


