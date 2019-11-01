function prefill(n, v) {
    if (n == 0 && typeof n !== 'boolean') return [];
    if (isNaN(n) || n < 1 || n == Infinity || typeof n == 'boolean' || n % 1 != 0) throw TypeError(`${n} is invalid`);
    n = Number(n);

    let fArray = []

    const technicallyNotALoop = (n, v) => {
        if (n <= 0) return;
        else {
            fArray.push(v);
            technicallyNotALoop(n - 1, v)
        }
    }

    technicallyNotALoop(n, v)
    return fArray
}

console.log(prefill(20,1)) // [1,1,1]