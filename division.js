//Diviser deux nombres
let numberOne = parseFloat(prompt("Entrez le premier nombre :"));
let numberTwo = parseFloat(prompt("Entrez le deuxième nombre :"));

//Check numbers
if (isNaN(numberOne)||isNaN(numberTwo)) {
    console.log("Veuillez entrer des nombres valides.");
}else{
    let division = numberOne / numberTwo //division
    console.log("Le rapport de "+numberOne+" sur "+numberTwo+" est : "+division+".");//Show results
}