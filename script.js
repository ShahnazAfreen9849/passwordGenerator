
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '123456789';
var symbols = '!@#$%^&*()><+_{]';
var poolOfCharacters = '';

function generatePassword() {


  var passwordLength = prompt("how many characters do you want your password to be?");
  console.log(passwordLength)

  if (passwordLength < 8) {
    alert("please pick something over than 8")
    return;
  }

  if (passwordLength > 128) {
    alert("Picking something smaller 128")
    return;
  }



  var lowerCaseAnswer = confirm("Do you want lower case?");
  var upperCaseAnswer = confirm("Do you want upper case?");
  var numberAnswer = confirm("Do you want number?");
  var symbolAnswer = confirm("Do you want symbol");

  if (lowerCaseAnswer === true) {
    poolOfCharacters = lowerCase + poolOfCharacters
  }
  console.log("this is for lowercase", lowerCaseAnswer);
  if (upperCaseAnswer === true) {
    poolOfCharacters = upperCase + poolOfCharacters
  }
  console.log("this is for uppercase", upperCaseAnswer);

  if (symbolAnswer === true) {
    poolOfCharacters = symbols + poolOfCharacters
  }
  console.log("this is for numbeAnswer", numberAnswer);
  if (numberAnswer === true) {
    poolOfCharacters = numbers + poolOfCharacters
  }
  console.log("this is for symbolAnswer", symbolAnswer);
  var passwordString='';
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * (poolOfCharacters.length - 0) + 0)
    var randomCharacter = poolOfCharacters[randomNumber]
     passwordString = randomCharacter + passwordString
  }
  return passwordString;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




