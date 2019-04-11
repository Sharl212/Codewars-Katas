function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[aeiou]/ig.test(str[i])) {
            vowelsCount++
        }
    }
    return vowelsCount;
}
// a, e, i, o, u

getCount("abracadabra")