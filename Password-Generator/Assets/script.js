// click button, generate password
//Series of prompts for the password criteria
//Criteria choice inputs for what data types to include in generating password
    //Length of password - must be at least 8 no more than 128 (not less than 8 and not more than 128) --- passwordLengthInput
    //Do you want to include uppercase, lowercase, numeric and/or special characters --- 
    //Validate inputs
    //One must be required
//Once all questions answered, generate password with only selected types
//pass passowrd to page or to alert box

var criteriaArray = [];
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!@#$%^&*?';
var numeric = '1234567890';

function isLengthInputValid(lengthInput) {
  if (lengthInput < 8 || lengthInput > 128) {
    return false;
  }
  return true;
}

function passwordLengthInput() {
  var pwlength = prompt("How long do you want your password to be? \nIt must be longer than 8, but less than 128 characters. \n** This is a required field and you must enter a value.");
  if (isLengthInputValid(pwlength)) {
    return pwlength;
  }
  passwordLengthInput();
}

function isOneCharacterTypeSelected(array) {
  if (array.length > 0) {
    console.log(array.length);
  } else {
    characterTypesInput();
  }
}

function characterTypesInput() {
  alert("Please indicate 'yes' or 'no' to the next questions to include or exclude in your password generation. \nYour choices will be:\n 1. Uppercase Letters like ABCD...\n 2. Lowercase Letters like abcd...\n 3. Special Characters like !@#$%...\n 4. Numeric characters like 12345... \n***YOU MUST ANSWER YES TO AT LEAST ONE QUESTION***");
  function upperLetters() {
    var includeUpperLetters = prompt("UPPERCASE\n\nDo you want to include UPPERCASE letters, like A B C? \nPlease type yes or no");
    if (includeUpperLetters.toLowerCase() === 'yes') {
      criteriaArray.push('Uppercase');
      console.log(criteriaArray);
    }
    if (includeUpperLetters.toLowerCase() !== 'yes' && includeUpperLetters.toLowerCase() !== 'no') {
      upperLetters();
    }
  }
  function lowerLetters() {
    var includeLowerLetters = prompt("LOWERCASE\n\nDo you want to include LOWERCASE letters, like a b c? \nPlease type yes or no");
    if (includeLowerLetters.toLowerCase() === 'yes') {
      criteriaArray.push('Lowercase');
      console.log(criteriaArray);
    }
    if (includeLowerLetters.toLowerCase() !== 'yes' && includeLowerLetters.toLowerCase() !== 'no') {
      lowerLetters();
    }
  }
  function specialCharacters() {
    var includeSpecialCharacters = prompt("SPECIAL CHARACTERS\n\nDo you want to include SPECIAL CHARACTERS, like ! @ # $ ? \nPlease type yes or no");
    if (includeSpecialCharacters.toLowerCase() === 'yes') {
      criteriaArray.push('Special');
      console.log(criteriaArray);
    }
    if (includeSpecialCharacters.toLowerCase() !== 'yes' && includeSpecialCharacters.toLowerCase() !== 'no') {
      specialCharacters();
    }
  }
  function numerics() {
    var includeNumeric = prompt("NUMBERS\n\nDo you want to include NUMBERS, like 1 2 3? \nPlease type yes or no");
    if (includeNumeric.toLowerCase() === 'yes') {
      criteriaArray.push('Numeric');
      console.log(criteriaArray);
    }
    if (includeNumeric.toLowerCase() !== 'yes' && includeNumeric.toLowerCase() !== 'no') {
      numerics();
    }
  }
  upperLetters();
  lowerLetters();
  specialCharacters();
  numerics();
}

function createCharacterChoices(criteria) {
  var stringChoices = "";
  for (i = 0; i < criteria.length; i++) {
    if (criteria[i] === 'Uppercase') {
      var  = uppercaseLetters;
    } else {
      var upper = " ";
    }
    if (criteria[i] === 'Lowercase') {
      var lower = lowercaseLetters;
    } else {
      var lower = " ";
    }
    if (criteria[i] === 'Special') {
      var specChar = specialCharacters;
    } 
    if (criteria[i] === 'Numeric') {
      var numbers = numeric;
    } 
  }
  var stringChoices = upper + lower + specChar + numbers;
  console.log(stringChoices);
  return stringChoices;
}

var inputLength = passwordLengthInput(); // validate password length
var setCharacterChoices = characterTypesInput(); // pushes the choices to the criteriaArray
var isOneCharTypeSelected = isOneCharacterTypeSelected(criteriaArray); //validates that at least one character type was selected
var generaterInputString = createCharacterChoices(criteriaArray); //creates a string of characters based on user input to use in the generator













// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(criteriaArray);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
