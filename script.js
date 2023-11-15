// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variables 
 var uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWX";
 var lowercaseChars="abcdefghijklamnoqrstuvwxyz;"
 var numberChars="0123456789";
 var specialChars="!@#$%^&*()_+";
 var inputs=[""] //declared to store user input
 var randomPassword=" " // to store password

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  //function for password length
  var passwordLength=prompt("how long should the password be?");
  //function to request password length
  if(passwordLength<8 || passwordLength>128 || isNaN(passwordLength)) {
  alert("invalid length - please enter a number between 8 and 128")
     return
  }
  //use choice for password include uppercase letters
  var uppercaseConfirm = confirm("Include uppercase letters?");
  //if user says ok
  if (uppercaseConfirm=== true) {
    for (var i = 0; i < uppercaseChars.length; i++) {
      inputs.push(uppercaseChars[i]);
    }
    console.log(inputs)
  }
  //user choice for password include lowercase letters
  var lowercaseConfirm= confirm("Include lowercase letters?");
  //if user says ok
  if (lowercaseConfirm=== true) {
    for (var i = 0; i < lowercaseChars.length; i++) {
      inputs.push(lowercaseChars[i]);
    }
    console.log(inputs)
  }
  //user choice for password include numbers
  var numberConfirm = confirm("Include numbers?");
  //if user says ok
  if (numberConfirm === true) {
    for (var i = 0; i < numberChars.length; i++) {
      inputs.push(numberChars[i]);
    }
    console.log(inputs)
  }
 //user choice for password include special characters
  var specialsConfirm = confirm("Include special characters?");
  // if user says ok
  if (specialsConfirm === true) {
    for (var i = 0; i < specialChars.length; i++) {
      inputs.push(specialChars[i]);
    }
    console.log(inputs)
  }

  // Forces the user to select at least one character type for their password.
  if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialsConfirm === false) {
    alert("You must chose at least 1 type of character.")
    return;
  }

  var randPassword = ""

  //Changes passLength string to intergers
  const confirmLength = parseInt(passwordLength)

  //compiles input choices into an array, returning random values through Math input by the length of the input array, returning password to the box
  for (var i = 0; i < confirmLength; i++) {
    inputs[
      Math.floor(Math.random() * inputs.length)];

    randPassword += inputs[
      Math.floor(Math.random() * inputs.length)];
  }
  return randPassword;
}
