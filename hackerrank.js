function hourglassSum(arr) {
    let MAX_ROWS = arr.length;
    let MAX_COLS = arr[0].length;
    let sumArray = []

    for (let i = 0; i < MAX_ROWS; i++) {
        for (let j = 0; j < MAX_COLS; j++) {
            // if (i + 1 < MAX_ROWS || i + 2 < MAX_ROWS) {
            //     break;
            // }
            let currentNumber = arr[i][j]
            let nextRowNumber = i + 1 < MAX_ROWS ? arr[i + 1][j - 1] : arr[i][j]
            let nextRowNumber2 = i + 2 < MAX_ROWS ? arr[i + 2][j] : arr[i][j]
            let previousNumbernext1 = 0
            let previousNumbernext2 = i + 2 < MAX_ROWS && j > 0 ? arr[i + 2][j - 2] : arr[i][j]
            
            if (i + 2 < MAX_ROWS) {
                previousNumbernext1 = j > 0 ? arr[i + 2][j - 1] : arr[i+2][j]
            }

            let previousNumber1 = arr[i][j - 1]
            let previousNumber2 = arr[i][j - 2]
            let sum = previousNumber1 + previousNumber2 + previousNumbernext1 + previousNumbernext2 + nextRowNumber2 + currentNumber + nextRowNumber

            if (!!sum) {
                sumArray.push(sum)
            }
            // }
        }
    }
    console.log(sumArray)
    let max = sumArray.reduce((a, b) => Math.max(a, b));

    return max
}
// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18

arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, , 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]
hourglassSum(arr)
