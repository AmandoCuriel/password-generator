// Assignment Code
lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",",",".","/","?",";",":","'","<",">","[","]","|","}","{","~","`"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var input = window.prompt("What is the password length? (must be between 8 and 128 characters)");

    if (input > 8 && input < 128) {
        var confirmLowerCase = confirm("Do you want your password to contain lower case letters?");
        var confirmUpperCase = confirm("Do you want your password to contain upper case letters?");
        var confirmSpecialCharacters = confirm("Do you want your password to contain special characters?");
        var confirmNumbers = confirm("Do you want your password to contain numbers?");
    } else {
        window.alert("Value must be between 8 and 128 characters");
    };
        
    if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters && confirmNumbers){
        var options = [...lowerCaseLetters, ...upperCaseLetters, ...specialCharacters, ...numbers];
    } else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters) {
        var options = lowerCaseLetters + upperCaseLetters + specialCharacters;
    } else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
        var options = [...lowerCaseLetters, ...upperCaseLetters, ...numbers];
    } else if (confirmLowerCase && confirmSpecialCharacters && confirmNumbers) {
        var options = [lowerCaseLetters, ...specialCharacters, ...numbers];
    } else if (confirmUpperCase && confirmSpecialCharacters && confirmNumbers) {
        var options = [upperCaseLetters, ...specialCharacters, ...numbers];
    } else if (confirmLowerCase && confirmUpperCase) {
        var options = [lowerCaseLetters, ...upperCaseLetters];
    } else if (confirmLowerCase && confirmSpecialCharacters) {
        var options = [lowerCaseLetters, ...specialCharacters];
    } else if (confirmLowerCase && confirmNumbers) {
        var options = [lowerCaseLetters, ...numbers];
    } else if (confirmUpperCase && confirmSpecialCharacters) {
        var options = [upperCaseLetters, ...specialCharacters];
    } else if (confirmUpperCase && confirmNumbers) {
        var options = [upperCaseLetters, ...numbers];
    } else if (confirmSpecialCharacters && confirmNumbers) {
        var options = [specialCharacters, ...numbers];
    } else if (confirmLowerCase) {
        var options = lowerCaseLetters;
    } else if (confirmUpperCase) {
        var options = upperCaseLetters;
    } else if (confirmSpecialCharacters) {
        var options = specialCharacters;
    } else if (confirmNumbers) {
        var options = numbers;
    } else if (!confirmLowerCase && !confirmUpperCase && !confirmSpecialCharacters && !confirmNumbers) {
        window.alert("That is not a valid answer");
    };

    var passwordArray = [];
    for (var i = 0; i < input; i++) {
        var result = options[Math.floor(Math.random() * options.length)];
        passwordArray.push(result); 
        var joinedPassword = passwordArray.join("");
        var passwordText = document.querySelector("#password");
        passwordText.value = joinedPassword;
    };
}

function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);