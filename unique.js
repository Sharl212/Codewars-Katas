function findUniq(arr) {
    return arr.filter(n => n !== arr[0])[0]
}

console.log(findUniq([1, 1, 0, 1]))