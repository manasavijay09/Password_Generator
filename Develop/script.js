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

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
