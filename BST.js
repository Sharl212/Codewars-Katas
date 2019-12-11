function parseInput(input, elem,i) {
    input
    let r = []
    if(i+1>input.length) {
        i
        return
    }

    
    // for (let i = 0; i < input.length; i++) {
    //     // tree nodes with children
    //     if (input[i] == '(' && input[i + 1] !== ')') {
    //         r.push(i + 1)
    //         console.log(input[i] + input[i + 1])
    //     } else if (input[i] == '(' && input[i + 1] == ')') {
    //         r.push(i + 1)
    //         console.log(input[i] + input[i + 1])
    //     }
    // }
    r
    return r
}

function buildTree(r, n, i) {
    let largest = i;
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < n && r[left] > r[largest]) {
        largest = left
    }

    if (right < n && r[right] > r[largest]) {
        largest = right
    }

    if (largest !== i) {
        let temp = r[i]
        r[i] = r[largest]
        r[largest] = temp

        buildTree(r, n, largest)
    }
}

function locator(r) {
    parseInput(r, r[0],0)
    console.log(r[0] = 1, r[1] = 2, r[2] = 3, r[22+1] = r[5] = 4, r[22+2] = r[6] = 5)
}

let input = '(()(()()))'
locator(input)