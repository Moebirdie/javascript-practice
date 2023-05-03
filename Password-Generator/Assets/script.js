// click button, generate password
//Series of prompts for the password criteria
//Criteria choice inputs for what data types to include in generating password
    //Length of password - must be at least 8 no more than 128 (not less than 8 and not more than 128) --- passwordLengthInput
    //Do you want to include uppercase, lowercase, numeric and/or special characters --- 
    //Validate inputs
    //One must be required
//Once all questions answered, generate password with only selected types
//pass password to page or to alert box
//|| (typeof lengthInput !== 'number'))

var criteriaArray = []; //global variable

//function isLengthInputValid(lengthInput) {
////  if (isNaN(lengthInput)) {
////    return false;
////  } else
//    if (lengthInput < 8 || lengthInput > 128) {
//      return false;
//    } else
//      return true;
//}

//function passwordLengthInput() {
//  var pwlength = prompt("How long do you want your password to be? \nIt must be longer than 8, but less than 128 characters. \n** This is a required field and you must enter a value.");
//  if (isLengthInputValid(pwlength)) {
//    return pwlength;
//  }
//  passwordLengthInput();
//}
function passwordLengthInput() {
  //var pwlen = 0;
  var pwlength = prompt("How long do you want your password to be? \nIt must be longer than 8, but less than 128 characters. \n** This is a required field and you must enter a value.");
  var pwlen = parseInt(pwlength,10);
  console.log(pwlen); 
   if (isNaN(pwlen)) {
    return passwordLengthInput(); 
  } else
    if (pwlen < 8 || pwlen > 128) {
    return  passwordLengthInput();
  } else {
    return pwlen;

}
}

function isOneCharacterTypeSelected(array) {
  if (array.length > 0) {
    console.log(array.length);
  } else {
    characterTypesInput();
  }
}

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

function generatePassword(pwLength) {
  var pwInputs = criteriaArray.join("");
  console.log(pwInputs,pwLength);
  var pwInputsLen = pwInputs.length;
  var genPassword = ' ';
  for (i = 0; i < pwLength; i++) {
    genPassword += pwInputs.charAt(Math.floor(Math.random() * pwInputsLen));
    console.log(genPassword);
  }
  return genPassword;
}

function setEmptyArray() {
  criteriaArray = [];                 
  document.querySelector("#password").innerHTML = "";
} 



// Write password to the #password input
function writePassword() {
  var inputLength = passwordLengthInput(); // 
  console.log(inputLength);
  var setCharacterChoices = characterTypesInput(); // displays prompts and pushes the choices to the criteriaArray
  var isOneCharTypeSelected = isOneCharacterTypeSelected(criteriaArray); //validates that at least one character type was selected
  var password = generatePassword(inputLength); //generates the random characters for the password
  document.querySelector("#password").innerHTML = "And the password is...\n\n" + password + "\n\nPlease store this in a safe place!";
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var reset = document.querySelector("#reset");
reset.addEventListener("click", setEmptyArray);