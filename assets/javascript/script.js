// Assignment Code
var generateBtn = document.querySelector("#generate");
var rangeInput = document.getElementById('passwordLength');
var lowerCaseCheckbox = document.getElementById('lowercase');
var upperCaseCheckbox = document.getElementById('uppercase');
var numericCheckbox = document.getElementById('numeric');
var SpecCharCheckbox = document.getElementById('specialcharacters');

//Global Variables
// passwordLength initial value is the center of the slider -- 68
var passwordLength = 68;
//Lowercase, uppercase, numeric, and Special Characters will be false by default
var lowerCaseSelected = false;
var upperCaseSelected = false;
var numericSelected = false;
var specialCaseSelected = false;

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
});

lowerCaseCheckbox.addEventListener('click', () => {
  lowerCaseSelected = lowerCaseCheckbox.checked;
  console.log(`Lower Case: ${lowerCaseSelected}`);
});

upperCaseCheckbox.addEventListener('click', () => {
  upperCaseSelected = upperCaseCheckbox.checked;
  console.log(`Upper Case: ${upperCaseSelected}`);
});
numericCheckbox.addEventListener('click', () => {
  numericSelected = numericCheckbox.checked;
  console.log(`Numeric: ${numericSelected}`);
});
SpecCharCheckbox.addEventListener('click', () => {
  specialCaseSelected = SpecCharCheckbox.checked;
  console.log(`Special Character: ${specialCaseSelected}`);
});
