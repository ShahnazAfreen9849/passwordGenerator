// // Assignment code here
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){


  var passwordLength = prompt("how many characters do you want your password to be?");
  console.log(passwordLength)

  if(passwordLength < 8){
    alert("please pick something over than 8")
    return;
  }
  if(passwordLength > 128){
    alert("Picking something smaller 128")
    return;
  }

  var lowerCaseAnswer = confirm("Do you want lower case?");
  var UpperCaseAnswer = confirm("Do you want upper case?");
  var numberAnswer = confirm("Do you want number?");
  var symbolAnswer = confirm("Do you want symbol");

  console.log("this is for lowercase", lowerCaseAnswer);
  console.log("this is for uppercase", lowerCaseAnswer);
  console.log("this is for lowercase", lowerCaseAnswer);
  console.log("this is for lowercase", lowerCaseAnswer)

  
  
  //return "hello";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// const resultEl=document.getElementById('result');
// const lengthEl=document.getElementById('length');
// const uppercaseEl=document.getElementById('uppercase');
// const lowercaseEl=document.getElementById('lowercase');
// const numberEl=document.getElementById('numbers');
// const symbolsEl=document.getElementById('symbols');
// const generateEl=document.getElementById('generate');
// const clipboardEl=document.getElementById('clipboard');

// const randomFunc= {
//   lower:getRandomLower,
//   upper:getRandomUpper,
//   number:getRandomNumber,
//   symbol:getRandomSymbol,

// };

// generateEl.addEventListener('click', () => {
//   const length =l +lengthEl.value;
//   const hasLower =lowercaseEl.checked;
//   const hasUpper =uppercaseEl.checked;
//   const hasNumber =numberEl.checked;
//   const hasSymbol =symbolsEl.checked;

//   resultEl.innerText =generatePassword(
//     hasLower,
//     hasUpper,
//     hasNumber,
//     hasSymbol,
//     length
//   );
// });

// clipboardEl.addEventListener('click', () => {
//   const textarea= document.createElement('textarea');
//   const password=resultEl.innerText;

//   if(!password){
//     return;
//   }
//   textarea.value =password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard!');
// });
  
//   resultEl.innerTextgeneratePassword(hasLower,hasUpper,hasNumber,hasSymbol);


// let generatedPassword ='';

// const typesCount=lower +upper + number + symbol;

// console.log('typesCount: ',typesCount);

// const typesArr=[{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

// console.log('typesArr: ', typesArr);
// /*if(typesCount === 0) {
//   return 'Error';
// }*/
// console.log(typesCount);

//   for (let i=0; i <length; i +=typesCount){
//     typesArr.forEach(type => {
//       const funcName =object.keys(type)[0];
//       console.log('funcName: ', funcName);
//       generatedPassword += randomFunc[funcName]();

//     });
//   }
//    const finalPassword=generatedPassword.slice(0,length);

//    return finalPassword;


// function generatePassword(lower,upper,number, symbol)

// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random()*26) +97);
// }
// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random()*26) +65);
// }
// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random()*10) +48);
// }

// function getRandomSymbol(){
//   return String.fromCharCode(Math.floor(Math.random()*26) +97);
// }


