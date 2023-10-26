// Addition de deux nombres : Ecrivez un algorithme pour demander à l'utilisateur de saisir deux nombres
// puis additionez-les et affichez le résultat.

// Ask the user to enter 2 numbers
let numberOne = parseFloat(prompt("Entrez le premier nombre :"));
let numberTwo = parseFloat(prompt("Entrez le deuxième nombre :"));

// Ckeck if the numbers are valid
if (isNaN(numberOne) || isNaN(numberTwo)) {
    console.log("Veuillez entrer des nombres valides.");
} else {
    // Sum of numbers
    let somme = numberOne + numberTwo;

    // Show the result
    console.log("La somme de "+numberOne+" et "+numberTwo+" est : "+somme+".");
}