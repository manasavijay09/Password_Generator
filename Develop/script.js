// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variables 
var uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWX";
 var lowercaseChars="abcdefghijklamnoqrstuvwxyz;"
 var numberChars="0123456789";
 var specialChars="!@#$%^&*()_+";
 var input=[""] //declared to store user input
 var randomPassword=" " // to store password

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  //function for password length
  var passwordLength=prompt("how long should the password be?");

  if(passwordLength<8 || passwordLength>128 || isNaN(passwordLength)) {
alert("invalid length - please enter a number between 8 and 128")
     return
  }
  var includeUppercase=prompt("include uppercase letters?");
  var includeLowercase=prompt("include lowercase letters?");
  var includeNumbers=prompt("include uppercase letters?");
  var includeSpecialChars=prompt("include uppercase letters?");
} 

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
