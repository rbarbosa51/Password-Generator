// Assignment Code
var generateBtn = document.querySelector("#generate");
var rangeInput = document.getElementById('passwordLength');
//Global Variables
// passwordLength initial value is the center of the slider -- 68
var passwordLength = 68;
function generatePassword() {
  return 'Test';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add event listener for Password Range input
rangeInput.addEventListener('change', () => {
  var lengthText = document.getElementById('lengthText');
  lengthText.innerText = `Password length of: ${rangeInput.value}`;
  //Validating the input 
  passwordLength = rangeInput.value;
  console.log(`passwordLength value is: ${passwordLength}`);
})