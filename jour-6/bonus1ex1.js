// MOMENT POUR EXO1
var moment = require("moment");

function formatDate (str) {
// format => aaaa-mm-jj

console.log(moment(str).format("Do MM YYYY"));
console.log(moment(str).calendar());

}

formatDate("1989-10-15");
// formatDate (process.argv[2]);