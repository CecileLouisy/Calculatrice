//Soustraction
//Ask for two numbers
let numberOne = parseFloat(prompt("Entrez le premier nombre :"));
let numberTwo = parseFloat(prompt("Entrez le deuxième nombre :"));

//Check for numbers
if (isNaN(numberOne)||isNaN(numberTwo)){
    console.log("Veuillez entrer des nombres valides.");
}else{
    let soustraction = numberOne - numberTwo;//soustraction
    console.log("La différence de "+numberOne+" moins "+numberTwo+" est : "+soustraction+".");//show results
}



