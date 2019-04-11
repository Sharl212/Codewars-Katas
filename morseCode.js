const decodeMorse = morseCode => {
    const dictionary = Object.entries({
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '': ' '
    });
    const morseArray = morseCode.split('');
    morseArray.length // log 
    for(let i=0; i < morseArray.length; i++){
        let element = morseArray[i];
        let index = morseArray.indexOf(element);

        if(element == ' ') {
            let test = morseArray.slice(0, index).join('')
            test
        }
    }
    morseArray
    let translation = [];

    morseArray.forEach(mCode => {
        for (let L of dictionary) {
            L[0] == mCode ? translation.push(L[1]) : ''
        }
    })
    return translation.join('').trim()
}


console.log(decodeMorse('.... . -.--   .--- ..- -.. .')) // HEY JUDE