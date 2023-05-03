// Title: Generate Password - javascript-practice repository

var criteriaArray = []; //global variable

//***** Length of password and validation *****

function passwordLengthInput() {
  //var pwlen = 0;
  var pwlength = prompt("How long do you want your password to be? \nIt must be longer than 8, but less than 128 characters. \n** This is a required field and you must enter a value.");
  var pwlen = parseInt(pwlength, 10);
  console.log(pwlen);
  if (isNaN(pwlen)) {
    return passwordLengthInput();
  } else
    if (pwlen < 8 || pwlen > 128) {
      return passwordLengthInput();
    } else {
      return pwlen;
    }
}

//***** Validation at least one character type is selected *****

function isOneCharacterTypeSelected(array) {
  if (array.length > 0) {
    console.log(array.length);
  } else {
    characterTypesInput();
  }
}

//****** User Prompts for character types *****

function characterTypesInput() {
  alert("Please indicate Y for 'yes' or N for 'no' to the following questions to choose what to include in your password generation. \nYour choices will be:\n 1. Uppercase Letters like ABCD...\n 2. Lowercase Letters like abcd...\n 3. Special Characters like !@#$%...\n 4. Numeric characters like 12345... \n***YOU MUST ANSWER YES TO AT LEAST ONE QUESTION***");
  function upperLetters() {
    var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var includeUpperLetters = prompt("UPPERCASE\n\nDo you want to include UPPERCASE letters, like A B C? \nPlease type Y for yes or N for no");
    if (includeUpperLetters.toLowerCase() === 'y') {
      criteriaArray.push(uppercaseLetters);
      console.log(criteriaArray);
    }
    if (includeUpperLetters.toLowerCase() !== 'y' && includeUpperLetters.toLowerCase() !== 'n') {
      upperLetters();
    }
  }
  function lowerLetters() {
    var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var includeLowerLetters = prompt("LOWERCASE\n\nDo you want to include LOWERCASE letters, like a b c? \nPlease type Y for yes or N for no");
    if (includeLowerLetters.toLowerCase() === 'y') {
      criteriaArray.push(lowercaseLetters);
      console.log(criteriaArray);
    }
    if (includeLowerLetters.toLowerCase() !== 'y' && includeLowerLetters.toLowerCase() !== 'n') {
      lowerLetters();
    }
  }
  function specialCharacters() {
    var specCharacters = '!@#$%^&*?';
    var includeSpecialCharacters = prompt("SPECIAL CHARACTERS\n\nDo you want to include SPECIAL CHARACTERS, like ! @ # $ ? \nPlease type Y for yes or N for no");
    if (includeSpecialCharacters.toLowerCase() === 'y') {
      criteriaArray.push(specCharacters);
      console.log(criteriaArray);
    }
    if (includeSpecialCharacters.toLowerCase() !== 'y' && includeSpecialCharacters.toLowerCase() !== 'n') {
      specialCharacters();
    }
  }
  function numerics() {
    var numbers = '1234567890';
    var includeNumeric = prompt("NUMBERS\n\nDo you want to include NUMBERS, like 1 2 3? \nPlease type Y for yes or N for no");
    if (includeNumeric.toLowerCase() === 'y') {
      criteriaArray.push(numbers);
      console.log(criteriaArray);
    }
    if (includeNumeric.toLowerCase() !== 'y' && includeNumeric.toLowerCase() !== 'n') {
      numerics();
    }
  }
  upperLetters();
  lowerLetters();
  specialCharacters();
  numerics();
}

// ***** Generate Password *****

function generatePassword(pwLength) {
  var pwInputs = criteriaArray.join("");
  console.log(pwInputs, pwLength);
  var pwInputsLen = pwInputs.length;
  var genPassword = ' ';
  for (i = 0; i < pwLength; i++) {
    genPassword += pwInputs.charAt(Math.floor(Math.random() * pwInputsLen));
    console.log(genPassword);
  }
  return genPassword;
}

// ***** Reset button - resets array to begin again *****

function setEmptyArray() {
  criteriaArray = [];
  document.querySelector("#password").innerHTML = "";
}

// ***** Write password to the #password input *****
function writePassword() {
  var inputLength = passwordLengthInput(); // 
  console.log(inputLength);
  var setCharacterChoices = characterTypesInput(); // displays prompts and pushes the choices to the criteriaArray
  var isOneCharTypeSelected = isOneCharacterTypeSelected(criteriaArray); //validates that at least one character type was selected
  var password = generatePassword(inputLength); //generates the random characters for the password
  document.querySelector("#password").innerHTML = "And the password is...\n\n" + password + "\n\nPlease store this in a safe place!";  //updates UI
}

// ***** Add event listener to generate button *****
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// ***** Add event listener for reset button *****
var reset = document.querySelector("#reset");
reset.addEventListener("click", setEmptyArray);