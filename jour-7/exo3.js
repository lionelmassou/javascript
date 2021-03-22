// MAP NAMES

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function(item) {
    return {name: item.firstName+" "+item.lastName};    
});

console.log(shortNames);





// console.log(longNames[0]);
// console.log(longNames[1]);

// var parm1 = longNames[0].firstName +" " +longNames[0].lastName
// console.log(parm1);
// var parm2 = longNames[1].firstName +" " +longNames[1].lastName
// console.log(parm2);



// var shortNames = longNames.map(function(parm1,parm2){
//     return parm1,parm2
// });

// console.log("nouveau tableau obtenu: ", shortNames);