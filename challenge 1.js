var capitals = function (word) {
    let indexes = []
    let wordArray = word.split('')
    wordArray.map(alphabet => {
        // check if alphabet is uppercase
        if(alphabet == alphabet.toUpperCase()) {
            indexes.push(wordArray.indexOf(alphabet))
        }
    })
    indexes
};

capitals('CodEWaRs')