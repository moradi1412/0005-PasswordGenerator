//Declaration of variables 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function promptlengthUser (){ 
  var lengthPass = window.prompt("please enter the length of password you want to generate");
  while (lengthPass <= 1 || lengthPass >= 128) {
  var lengthPass = window.prompt("password length must be between 1 to 128 ");
  }
  return lengthPass;
}

function promptParameter(){  
  var confirmUpper = window.confirm("do you want to include uppercase letter");
  var confirmlower = window.confirm("do you want to include lower letter");
  var confirmNumber = window.confirm("do you want to have numbers within");
  var confirmSymbol = window.confirm("do you want to include symbols");

  while (confirmUpper === false && confirmlower === false && confirmNumber === false && confirmSymbol === false) {

    window.alert("you must choose at least one parameters")
    var confirmUpper = window.confirm("do you want to include uppercase letter");
    var confirmlower = window.confirm("do you want to include lower letter");
    var confirmNumber = window.confirm("do you want to have numbers within");
    var confirmSymbol = window.confirm("do you want to include symbols");
  }

  //including characters based on cofirming with user into one array 
  var securePass = [];
  if (confirmUpper) {
    securePass = securePass.concat(alphaUpper);
  }
  if (confirmlower) {
    securePass = securePass.concat(alphaLower);
  }
  if (confirmNumber) {
    securePass = securePass.concat(number);
  }
  if (confirmSymbol) {
    securePass = securePass.concat(specialChar);
  }
  return securePass; 
  console.log(securePass);
  // end including characters based on cofirming with user into one array 
}

//creating the password 
function generatePassword() {
  //input validation for parameters 
  var passlength = promptlengthUser (); 
  var passwordArray = promptParameter (); 

  var randomPass = "";
  //create random securepassword base on length 
  for (var index = 0; index < passlength; index++) {
    randomPass = randomPass + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    console.log(randomPass);
  }
  return randomPass;
};
// console.log(generatePassword());


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);