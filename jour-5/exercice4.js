// GUESS

var min = 1;
var max = 100;
var mysteryNum = Math.floor(Math.random() * (max - min + 1) + min);

var prompt = require("prompt");

var properties = [
  {
    name: "Number",
    validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
    warning: "Number doit être compris entre 1 et 100, pas d'espaces, pas de tirets"

    description: "Saisissez votre Number", // Consigne affichée
    type: "string", // Type de la donnée saisie
    pattern: /^\w+$/, // Regex utilisée pour la validation
    message: "Le mot de passe ne doit contenir que des lettres", // Message d'erreur

function play () {}