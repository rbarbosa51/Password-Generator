// Assignment Code
var generateBtn = document.querySelector("#generate");
var rangeInput = document.getElementById('passwordLength');
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
  // var pPlacement = document.getElementById('lengthText');
  // pPlacement.innerText = rangeInput.value;
  console.log(`Value is ${rangeInput.value}`);
  var passLength = document.getElementById('lengthText');
  passLength.innerText = `Password length of: ${rangeInput.value}`;
  console.log(passLength.innerText);
})