//Asking user for length & returning the length 
function lengthPass (){ 
  var lengthPass = window.prompt ("please enter the length of password you want to generate"); 
  return lengthPass; 
} 
console.log(lengthPass()); 

function promptUpper (){
  var confirmUpper = window.confirm ("do you want to include uppercase letter"); 
  if (confirmUpper) {
    return true
  }
  else {
    return false;
  }
}; 
console.log (promptUpper()); 

function promptLower (){
  var confirmlower = window.confirm ("do you want to include lower letter"); 
  if (confirmlower) {
    return true
  }
  else {
    return false;
  }
}; 
console.log (promptLower());

function promptNumber (){
  var confirmNumber = window.confirm ("do you want to have numbers within");  
  if (confirmNumber) {
    return true
  }
  else {
    return false;
  }
}; 
console.log (promptNumber());

function promptsymbol (){
  var confirmSymbol = window.confirm ("do you want to include symbols"); 
  if (confirmSymbol) {
    return true
  }
  else {
    return false;
  }
}; 
console.log (promptsymbol());









// const randomfunction = {
//   upper: getUpper, 
//   lower: getRandomLower,
//   number: getRandomNumber,
//   symbol: getrandomsymbol
// }; 

// //getting these function from Character Char Code 
// //generator Functions - wants the number from (97-122) for lower case 
// function getRandomLower() {
//   getRandomLower = String.fromCharCode(Math.floor((Math.random () * 26) + 97 ));
//   return getRandomLower; 
// }

// //generator Functions - wants the number from (65-90) for upper case 
// function getUpper() {
//   getUpper = String.fromCharCode(Math.floor((Math.random () * 26) + 65 ));
//   return getUpper; 
// }

// //generator Functions - wants the number from (48-57) for number
// function getRandomNumber() {
//   getRandomNumber = String.fromCharCode(Math.floor((Math.random () * 10) + 48 ));
//   return getRandomNumber; 
// }

// function getrandomsymbol(){
//   const symbols =  "!#$%&()*+,-./:;<=>?@[]^_`{|}~"; 
//   return symbols[Math.floor(math.random() * symbols.length)];  
// }

// //console.log (getrandomsymbol());

// function generatePassword(); 
// var generatePassword = ''; 
// 
//








// // // Assignment Code
// // var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
