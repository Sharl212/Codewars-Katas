function encoder(data) {
    let dictionary = []
    let output = []

    for (let i = 0; i < data.length; i++) {
        let char = data[i]
        let charAhead = data[i + 1]
        let charAheadTwice = data[i + 2]
        if (dictionary.length == 0) {
            dictionary.push({ index: i, char: char })
            continue;
        }

        // if (dictionary.length + 1 > data.length) {
        //     console.log(dictionary)

        //     return
        // }

        let isfound = false
        let longestIndex = 0;
        // let isfound = dictionary.map((x, index) => {
        //     if (x.char == char || x.char == charAhead || x.char == charAheadTwice) {

        //     }
        // })
        // console.log(i, isfound)
        for (let j = i; j >= 0; j--) {
            let x = dictionary[j]
            let xAhead = dictionary[j + 1]
            let xAheadTwice = dictionary[j + 2]
            if (x) {
                if (x.char == char) {
                    console.log(x.char, ' matched ', char)
                    dictionary.push({ index: j, char: char })
                    isfound = true
                    break;
                }
                if (x.char == charAheadTwice) {
                    console.log(x.char, ' matched ', charAheadTwice)
                    dictionary.push({ index: j, char: charAheadTwice })
                    isfound = true
                    break;
                }
                if (x.char == charAhead) {
                    console.log(x.char, ' matched ', charAhead)
                    dictionary.push({ index: j, char: charAhead })
                    dictionary.push({ index: 0, char: char + xAheadTwice })
                    dictionary.push({ index: 0, char: charAhead + xAheadTwice })

                    break;
                }

                if (xAheadTwice && xAhead && charAhead && charAheadTwice && x.char.charCodeAt() + xAhead.char.charCodeAt() + xAheadTwice.char.charCodeAt() ==
                    char.charCodeAt() + charAhead.charCodeAt() + charAheadTwice.charCodeAt()) {
                    console.log(x.char + xAhead.char + xAheadTwice.char, ' matched ', char + charAhead + charAheadTwice)
                    dictionary.push({ index: j, char: char + charAhead + charAheadTwice })
                    dictionary.push({ index: 0, char: char + charAheadTwice })
                    dictionary.push({ index: 0, char: charAhead + charAheadTwice })
                    dictionary.push({ index: 0, char: char + charAhead })
                    isfound = true
                    break;
                }

                if (xAheadTwice && xAhead && charAhead && charAheadTwice && x.char.charCodeAt() + xAhead.char.charCodeAt() == char.charCodeAt() + charAhead.charCodeAt()) {
                    console.log(x.char + xAhead.char, ' matched ', char + charAhead)
                    dictionary.push({ index: j, char: char + charAhead })
                    dictionary.push({ index: 0, char: char + charAheadTwice })
                    dictionary.push({ index: 0, char: charAhead + charAheadTwice })
                    isfound = true
                    break;
                }

                if (xAheadTwice && xAhead && charAhead && charAheadTwice && xAhead.char.charCodeAt() + xAheadTwice.char.charCodeAt() == charAhead.charCodeAt() + charAheadTwice.charCodeAt()) {
                    console.log(xAhead.char + xAheadTwice.char, ' matched ', charAhead + charAheadTwice)
                    dictionary.push({ index: 0, char: char })
                    break;
                }
            }
        }

        // if (isfound == false) {
        //     dictionary.push({ index: 0, char: char })
        // }
    }
    console.log(dictionary)
    output
}

function decoder(data) {
    // your code here
}
//      0 1 2 3
encoder('ABCABCABCABCABCABC') // 0A0B1A2A4A4B
// encoder('AAAAAAAAAAAAAAA') // 0A1A2A3A4A
