var moment = require ("moment");

function calculateAge (str) {

    console.log(moment(str, "YYYYMMDD").fromNow());
}

calculateAge("1989-10-15");