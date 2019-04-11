function josephus(items, k) {
    let count = 1;
    let result = []

    test = items.filter(item => {
        count++;
        if(count == 3) {
            return item            
        }
    })
    test
    // for (let item of items) {
    //     if (count == 3) {
    //         result.push(item)
    //         count = 1;
    //     } else {
    //         count++;
    //     }
    // }
    return result;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))