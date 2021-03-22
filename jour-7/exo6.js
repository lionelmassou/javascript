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
// NON VALABLE

// var sales = cakes.filter(function(item) {
//     if (item.flavor === "chocolate" && item.name){
//         return item.status = "sold out !"
//     }
// });
// console.log(sales);

// options.filter(opt => !opt.assigned).map(opt => someNewObject)

var sales = cakes.filter(item => item.flavor === "chocolate").map(item:  => item.status="sold out !", )
console.log(sales);