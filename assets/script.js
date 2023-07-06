var generateBtn = document.querySelector("#generate");


function writePassword() {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*"];
}

function generatePassword() {

var user = window.prompt("Enter characters between 8-128.");
var passwordLength = parseInt(user);
if (isNan(passwordLength)) {
  window.alert("Please enter characters between 8-128 in length.");
  return;}
  else
  console.log("Thank you for entering a valid length");
}

function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);