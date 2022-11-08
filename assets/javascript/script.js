// Assignment Code
var popup = document.getElementById('popup');
var generateBtn = document.querySelector("#generate");
var popupBtnGenerate = document.getElementById('popupBtnGenerate');
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

var ComputedPassword = "Test";


function generatePassword() {
  //Actual Password Generation
  if ((lowerCaseSelected === false) && (upperCaseSelected === false) && (numericSelected === false) && (specialCaseSelected === false)) {
    alert("Error, You must select at least one criteria.");
    return;
  } else {
    var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', '?', ':', ';', '<', '>', '.', '/'];
    //var 
    //End Actual Password Generation
    var passwordText = document.querySelector("#password");
    passwordText.value = ComputedPassword;
    console.log(ComputedPassword);
    popup.classList.add('hidden');
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function openPopup() {
  popup.classList.remove('hidden');
}
// function closePopup() {
//   popup.classList.add('hidden');
// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", openPopup);
popupBtnGenerate.addEventListener('click', generatePassword);


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
