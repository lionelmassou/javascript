// VALIDATOR

var prompt = require("prompt");


var properties = [
    {
        name: "username",
        description: "Enter Username", // Consigne affichée
        validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, chiffres et tirets
        
    },
    {
        name: "password",
        description: "Enter password", // Consigne affichée        
        validator: /^\w+$/, // Regex utilisée pour la validation
    },
    {
        name: "email",
        description: "format xxxxx@xxxx.xxx", // Consigne affichée        
        validator: /^\w+$/, // Regex utilisée pour la validation
    }
];

// prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
    console.log("erreur", err);
}

prompt.get( 
    {properties, function (err, res) {
    if (err) {
        return onErr(err);
    }

    function checkProfile() {
        if (res.username && res.password && res.email) {
            console.log("All Good !");
        } else {
            console.log("error");
        }
    }
})


