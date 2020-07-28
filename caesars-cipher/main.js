// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) {
    console.log(str);
    const coded = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    const decoded = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStrArr = [];
    let location;
    for (let char in str) {
        location = coded.indexOf(str[char]); // returns -1 if not found
        if (location < 0) {
            newStrArr.push(str[char]);
        } else { newStrArr.push(decoded[location]) };
    };
    str = newStrArr.join("");
    return str;
}

rot13("SERR PBQR PNZC");