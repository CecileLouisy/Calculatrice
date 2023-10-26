//Multiplier deux nombres

// Ask for two numbers
let numberOne = parseFloat(prompt("Entrez le premier nombre :"));
let numberTwo = parseFloat(prompt("Entrez le deuxième nombre :"));

// Check for numbers
if (isNaN(numberOne)||isNaN(numberTwo)){
    console.log("Veuillez entrer des nombres valides");
} else {
    let multiplication = numberOne * numberTwo;

    // Show result
    console.log("Le produit de "+numberOne+" par "+numberTwo+" est : "+multiplication+".");
}