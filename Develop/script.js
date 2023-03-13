// Assignment Code
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "/", "?", ";", ":", "'", "<", ">", "[", "]", "|", "}", "{", "~", "`"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var input = window.prompt("What is the password length? (must be between 8 and 128 characters)");

    if (input > 8 && input < 128) {
        var confirmLowerCase = confirm("Do you want your password to contain lower case letters?");
        var confirmUpperCase = confirm("Do you want your password to contain upper case lettesr?");
        var confirmSpecialCharacters = confirm("Do you want your password to contain special characters?");
        var confirmNumbers = confirm("Do you want your password to contain numbers?");
    } else if (input < 8 || input > 128){
        window.alert("Value must be between 8 and 128 characters");
    };
        
    if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters && confirmNumbers){
        var options = (lowerCaseLetters += upperCaseLetters += specialCharacters += numbers);
    } else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters){
        options = (lowerCaseLetters += upperCaseLetters += specialCharacters);
    } else if (confirmLowerCase && confirmUpperCase && confirmNumbers){
        options = (lowerCaseLetters += upperCaseLetters += numbers);
    } else if (confirmLowerCase && confirmSpecialCharacters && confirmNumbers){
        options = (lowerCaseLetters += specialCharacters += numbers);
    } else if (confirmUpperCase && confirmSpecialCharacters && confirmNumbers){
        options = (upperCaseLetters += specialCharacters += numbers);
    } else if (confirmLowerCase && confirmUpperCase){
        options = (lowerCaseLetters += upperCaseLetters);
    } else if (confirmLowerCase && confirmSpecialCharacters){
        options = (lowerCaseLetters += specialCharacters);
    } else if (confirmLowerCase && confirmNumbers){
        options = (lowerCaseLetters += numbers);
    } else if (confirmUpperCase && confirmSpecialCharacters){
        options = (upperCaseLetters += specialCharacters);
    } else if (confirmUpperCase && confirmNumbers){
        options = (upperCaseLetters += numbers);
    } else if (confirmSpecialCharacters && confirmNumbers){
        options = (specialCharacters += numbers);
    } else if (confirmLowerCase){
        options = (lowerCaseLetters);
    } else if (confirmUpperCase){
        options = (upperCaseLetters);
    } else if (confirmSpecialCharacters){
        options = (specialCharacters);
    } else if (confirmNumbers){
        options = (numbers);
    } else if (!confirmLowerCase && !confirmUpperCase && !confirmSpecialCharacters && !confirmNumbers) {
        window.alert("That is not a valid answer");
    };
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);