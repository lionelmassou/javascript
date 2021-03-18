// FORMAT

function formatDate(mydate) {
    // format => aaaa-mm-jj
    var thedate, month, year = 0;


    year = mydate.substring(0, 4);
    thedate = mydate.substring(8, 10);
    month = mydate.substring(5, 7);
    // console.log("avant le if", month);

    if (parseInt(month) < 10 ) {
        month = "0" + mydate.substring(5, 6);
        thedate = mydate.substring(7, 9);
        // console.log("apres le if", month);
    }

    //format jj/mm/aaaa
    console.log("la date est: ", thedate, "/", month, "/", year);
}
// formatDate("1989-10-15");
// formatDate("1989-4-15");


// autre option

// function formatDate(stringDate) {

//     newDate = new Date(stringDate)
//     year = newDate.getFullYear()
//     month = newDate.getMonth()
//     day = newDate.getDate()
//     console.log(day + "/" + (month+1) + "/" + year )
    
// }

// formatDate(process.argv[2]);
// formatDate("1989-10-15");
// formatDate("1989-4-15");