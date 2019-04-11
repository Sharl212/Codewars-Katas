/*
    Freecodecamp challenge 
    https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/
*/

function palindrome(str) {
    let newStringWithoutSpaces = [];
    let reversedStringWithoutSpaces = [];
    for (let i = 0; i < str.length; i++) {
        const alphabet = str[i].toLowerCase()
        if (alphabet.match(/^[a-zA-Z0-9]+$/g)) {
            reversedStringWithoutSpaces.push(alphabet)
            newStringWithoutSpaces.push(alphabet)
        }
    }
    const original = newStringWithoutSpaces.join('');
    const reversed = reversedStringWithoutSpaces.reverse().join('');
    reversed;
    original;
    if (original == reversed) return true
    return false
}



palindrome("A man, a plan, a canal. Panama")