// click button, generate password
//Series of prompts for the password criteria
//Criteria choice inputs for what data types to include in generating password
    //Length of password - must be at least 8 no more than 128 (not less than 8 and not more than 128) --- passwordLengthInput
    //Do you want to include uppercase, lowercase, numeric and/or special characters --- 
    //Validate inputs and one must be required
//Once all questions answered, generate password
//pass passowrd to page or to alert box

//first draft use prompts


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

function isOneCharacterTypeSelected() {
  var array = criteriaArray;
  if (array.length > 0) {
  console.log(criteriaArray.length);
  } else {
  characterTypesInput();
  }
}

function characterTypesInput() {
  alert("Please indicate 'yes' or 'no' to the next questions to include or exclude in your password generation. \nYour choices will be:\n 1. Uppercase Letters like ABCD...\n 2. Lowercase Letters like abcd...\n 3. Special Characters like !@#$%...\n and/or\n 4. Numeric characters like 12345... \n**You must select one.");
  var includeUpperLetters = prompt("Do you want to include UPPERCASE letters, like A B C? \nPlease type yes or no");
    if (includeUpperLetters === 'yes'|| includeUpperLetters === 'no') {
      if (includeUpperLetters === 'yes') {
        criteriaArray.push('Uppercase');
        console.log(criteriaArray);
      }
    }  
  var includeLowerLetters = prompt("Do you want to include LOWERCASE letters, like a b c? \nPlease type yes or no");
    if (includeLowerLetters === 'yes'|| includeLowerLetters === 'no') {  
      if (includeLowerLetters === 'yes') {
        criteriaArray.push('Lowercase');
        console.log(criteriaArray);
      }
    }
  var includeSpecialCharacters = prompt("Do you want to include SPECIAL CHARACTERS, like ! @ # $ ? \nPlease type yes or no");
    if (includeSpecialCharacters === 'yes'|| includeSpecialCharacters === 'no') {
      if (includeSpecialCharacters === 'yes') {
        criteriaArray.push('Special');
        console.log(criteriaArray);
      }
    }
  var includeNumeric = prompt("Do you want to include NUMERIC values, like 1 2 3? \nPlease type yes or no");
    if (includeNumeric === 'yes'|| includeNumeric === 'no') {
      if (includeNumeric === 'yes') {
        criteriaArray.push('Numeric');
        console.log(criteriaArray);
      }
    }
  isOneCharacterTypeSelected();
}





var inputLength = passwordLengthInput();
var getCharacterChoices = characterTypesInput();
//var isOneCharacterTypeValid = isOneCharacterTypeSelected();














// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
