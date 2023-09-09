// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Prepares variables to hold the different types of password criteria.
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!#$%&'()*+,-./::<>?@[]^_~`{}\"\\";
  var number = "0123456789";
  var generator = "";

  //While the length of pass is less than 8 or greater than 128 it will continue to prompt the user.
  var lengthPass = prompt("Length of password (8-128 characters): ");
  while (lengthPass > 128 || lengthPass < 8 ){
    lengthPass = prompt("Length of password (8-128 characters): ");
  }

  //While the answers to the prompts are not equal to yes or no it will continue to prompt the user.
  var lowercasePass = prompt("Include lowercase letters?: ");
  while (lowercasePass !== "yes" && lowercasePass !== "no"){
    lowercasePass = prompt("Include lowercase letters?: ");
  }
  var uppercasePass = prompt("Include uppercase letters?: ");
  while (uppercasePass !== "yes" && uppercasePass !== "no"){
    uppercasePass = prompt("Include uppercase letters?: ");
  }
  var specialPass = prompt("Include special characters?: ");
  while (specialPass !== "yes" && specialPass !== "no"){
    specialPass = prompt("Include special characters?: ");
  }
  var numberPass = prompt("Include numbers?: ");
  while (numberPass !== "yes" && numberPass !== "no"){
    numberPass = prompt("Include numbers?: ");
  }
  
  //If the user selects yes on one of the prompts the generator gets the corresponding string concatenated.
  if (lowercasePass === "yes"){
    generator += lowercase;
  }
  if (uppercasePass === "yes"){
    generator += uppercase;
  }
  if (specialPass === "yes"){
    generator += special;
  }
  if(numberPass === "yes"){
    generator += number;
  }

  //Generates a password by grabbing a random character from the generator string and adds it to the password string.
  for (var x = 0; x < lengthPass; x++){
    var character = Math.floor(Math.random() * generator.length + 1);
    password += generator.charAt(character);
  }
  
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
