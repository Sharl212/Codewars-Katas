function high(x) {
    let arr = x.split(' ')
    let scores = [];

    for (let word of arr) {
        let WordScore = { points: 0 };
        if(word == 0) return '';
        for (let letter of word) {
            const charCode = letter.charCodeAt();
            const points = charCode - 97 == 0 ? 1 : charCode - 97;
            const index = arr.indexOf(word)
            WordScore = { points: WordScore.points + points, word, index }
        }
        scores.push(WordScore)
    }

    return scores.reduce((prev, current) => {
        if (prev.points >= current.points) {
            return prev;
        } else if (prev.index < current.index) {
            return current;
        }
    })['word'];
}

console.log(high('l p u l')) // 'gmijmu'