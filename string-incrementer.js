function incrementString(str) {
    let result = '';
    let numbers = '';
    let numbersStartingIndex = '';

    const strLength = str.length
    const LastLetter = Number(str[strLength - 1]);
    for (let i in str) {
        const index = str[i]
        if (!isNaN(index)) {
            numbers = numbers.concat(index)
            if(numbersStartingIndex == '') {
                numbersStartingIndex = str.indexOf(index);
            }
        }
    }
    numbersStartingIndex
    if (!isNaN(LastLetter)) {
        const removedStringLastNumber = str.substring(0, strLength - numbersStartingIndex/2);
        result = removedStringLastNumber + (Number(numbers) + 1)
    } else {
        result = str + '1';
    }

    return result
}

console.log(incrementString("foobar001"));