const uniqueInOrder = iterable => {
    let uniqueList = []
    for (let i = 0; i < iterable.length; i++) {
        const currentItem = iterable[i];
        currentItem !== iterable[i + 1] ? uniqueList.push(currentItem) : ''
    }
    return uniqueList
}

uniqueInOrder('AAAABBBCCDAABBB') // ['A','B','C','D','A','B']