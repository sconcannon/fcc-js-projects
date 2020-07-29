// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
function telephoneCheck(str) {
    // must have only 10-11 digits, parentheses, dash, space
    let approved = '0123456789()- ';
    for (let char in str) {
        if (approved.indexOf(str[char]) < 0) return false;
    }
    if (str.match(/[0-9]/g).length > 11) return false; // too many digits
    if (str.match(/[0-9]/g).length < 10) return false; // too few digits
    // check for pair of parentheses, and that they surround area code
    if (str.indexOf('(') != -1 || str.indexOf(')') != -1) {
        if (!/\(\d{3}\)/.test(str)) return false; // /\(\d{3}(?=\))/
    }
    // if 11 digits, country code of 1 must start the string
    if (str.match(/[0-9]/g).length === 11) {
        if (!str.startsWith('1')) return false; // country code must be 1
    }
    // check for properly formed phone number
    const pattern = /1?\s?\(?\d{3}\)?(.?|\s?)\d{3}(.?|\s?)\d{4}$/;
    if (!pattern.test(str)) {
        return false;
    }
    return true;
}

telephoneCheck("555-555-5555");