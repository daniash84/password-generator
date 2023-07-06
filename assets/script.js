// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*"];
}

function generatePassword() {
// Add event listener to generate button
var user = window.prompt("Enter characters between 8-128.");
var passwordLength = parseInt(user);
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please enter characters between 8-128 in length.");
  return;
}
}

// Write password to the #password input
 var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
 generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");
  passwordText.value = password;


function writePassword() {
}