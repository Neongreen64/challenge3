// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!#$%&'()*+,-./::<>?@[]^_~`{}|";
  var number = "0123456789";
  var generator = "";

  var lengthPass = prompt("Length of password (8-128 characters): ");
  if (lengthPass > 128 || lengthPass < 8 ){
    lengthPass = prompt("Length of password (8-128 characters): ");
  }

  var lowercasePass = prompt("Include lowercase letters?: ");
  var uppercasePass = prompt("Include uppercase letters?: ");
  var specialPass = prompt("Include special characters?: ");
  var numberPass = prompt("Include numbers?: ");
  
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

  for (var x = 0; x < lengthPass; x++){
    var character = Math.floor(Math.random() * generator.length + 1);
    password += generator.charAt(character);
  }
  console.log(generator);
  console.log(password);
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
