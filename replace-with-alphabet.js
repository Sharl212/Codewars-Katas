function alphabetPosition(text) {
    if (text <= 0) return '';

    let alphabetPositions = ''
    for (const letter of text.toLowerCase().trim()) {
        const position = letter.charCodeAt() - 96;
        if (/[A-z]/g.test(letter) && position > 0) {
            alphabetPositions.length == 0 ? 
            alphabetPositions += `${position}` : // there's probably a better way to do this, but im lazy
            alphabetPositions += ` ${position}`
        }
    }

    if (alphabetPositions <= 0) return '';
    return alphabetPositions;
}

alphabetPosition("The sunset sets at twelve o' clock.") // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
