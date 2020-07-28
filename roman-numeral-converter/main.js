// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
/// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let numStr = num.toString(10); // number to be converted to string so digits can be picked
    let x = numStr.length - 1; // to set loop length for looping through number to be checked
    let place = 1; // keep track of places - 1 = single digits, 2 = tens, etc
    let romNum = ""; // romNum collects the letters in the riman numeral
    let romPlace; // holds the generated place Roman numeral

    function placeEval(pl, nums) {
        // generates numeral for the place digit in the evaluation number
        switch (pl) {
            case 0:
            case 1:
            case 2:
            case 3:
                return nums[0].repeat(pl);
            case 4:
                return nums[0] + nums[1];
            case 5:
            case 6:
            case 7:
            case 8:
                return nums[1] + nums[0].repeat(pl - 5);
            case 9:
                return nums[0] + nums[2];
        }
    }
    do {
        let placeVal = parseInt(numStr[x], 10); // convert the place digit to an interger value
        console.log(placeVal);
        // convert to digit to it's Roman numeral value
        switch (place) {
            case 1:
                romPlace = placeEval(placeVal, 'IVX');
                break;
            case 2:
                romPlace = placeEval(placeVal, 'XLC');
                break;
            case 3:
                romPlace = placeEval(placeVal, 'CDM');
                break;
            case 4:
                romPlace = 'M'.repeat(placeVal);
                break;
        }
        console.log(romPlace);
        romNum = romPlace + romNum; // add the place numeral to the Roman numeral
        x--;
        place++;
    } while (x > -1); // until all places have been converted
    return romNum;
}



convertToRoman(36);
convertToRoman(2) // should return "II".
convertToRoman(3) // should return "III".
convertToRoman(4) // should return "IV".
convertToRoman(5) // should return "V".
convertToRoman(9) // should return "IX".
convertToRoman(12) // should return "XII".
convertToRoman(16) // should return "XVI".
convertToRoman(29) // should return "XXIX".
convertToRoman(44) // should return "XLIV".
convertToRoman(45) // should return "XLV"
convertToRoman(68) // should return "LXVIII"
convertToRoman(83) // should return "LXXXIII"
convertToRoman(97) // should return "XCVII"
convertToRoman(99) // should return "XCIX"
convertToRoman(400) // should return "CD"
convertToRoman(500) // should return "D"
convertToRoman(501) // should return "DI"
convertToRoman(649) // should return "DCXLIX"
convertToRoman(798) // should return "DCCXCVIII"
convertToRoman(891) // should return "DCCCXCI"
convertToRoman(1000) // should return "M"
convertToRoman(1004) // should return "MIV"
convertToRoman(1006) // should return "MVI"
convertToRoman(1023) // should return "MXXIII"
convertToRoman(2014) // should return "MMXIV"
convertToRoman(3999) // should return "MMMCMXCIX"