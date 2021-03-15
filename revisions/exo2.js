// XOXO

function countEach(str) {

    var valX = 0;
    var valO = 0;

    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt[i]);
        
        if ("x" === str.charAt[i]){
            
            valX = valX + 1;
        } else {
            valO = valO + 1;
        }
    }
    console.log(valX);
    console.log(valO);
}

countEach("xoox");
