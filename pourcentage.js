//Pourcentage

// Ask for one number and a percentage
let numberOne = parseFloat(prompt("Entrez le premier nombre :"));
let percent = parseFloat(prompt("Entrez le pourcentage voulu :"));

// Check for numbers
if (isNaN(numberOne)||isNaN(percent)){
    console.log("Veuillez entrer des nombres valides");
} else {
    let percentage = numberOne * percent/100;

    // Show result
    console.log(+percent+"% de "+numberOne+" est égal à "+percentage+".");
}