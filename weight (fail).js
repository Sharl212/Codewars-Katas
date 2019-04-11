
function orderWeight(w, i, result) {
    w
    let split = i == 0 ? w.split('') : w
    split
    // for (let i = 0; i < split.length; i++) {
        // console.log(split)
        if (split[i].match(' ')) {
            let whitespace = split[i]
            console.log(split.indexOf(whitespace))
            // console.log(whitespace)
            result.push(split.slice(0, split.indexOf(whitespace)).reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue)))
            return orderWeight(split.slice(split.indexOf(whitespace)+1, split[split.length]), i+1, result)
        }
        // else {
        return orderWeight(w, i+1, [])
        // }
    // }
    result
}

orderWeight("103 123 4444 99 2000", 0, []) // "2000 103 123 4444 99"