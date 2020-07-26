// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

// Return true
// if the given string is a palindrome.Otherwise,
//     return false.

// A palindrome is a word or sentence that 's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You 'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We 'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We 'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
function palindrome(str) {
    str = str.toLowerCase();
    // this returns lower case letters and digits only
    let cleanerRegEx = /[a-z0-9]+/g;
    let cleanedArr = str.match(cleanerRegEx);
    let cleanedStr = cleanedArr.join('');
    let x = 0;
    do {
        // check first to last, then second to sencond to last, & so on
        if (cleanedStr[x] != cleanedStr[cleanedStr.length - x - 1]) {
            return false;
        }
        x++;
    } while (x < cleanedStr.length / 2); //stop checking at the middle of the string
    // if we reach the middle of the string, palindrome is present
    return true;
}



palindrome("eye");