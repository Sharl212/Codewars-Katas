/**
 * @param {number[][]} matrix
 * @return {number[]}
 *//**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function (matrix) {
    console.log(matrix[0])
    if (matrix.length <= 1) return matrix[0] || []
    let result = []
    for (let mat of matrix) {
        if (mat.length <= 1) {
            result.push(...mat)
        }
    }
    if (result.length !== 0) return result

    let order = []
    let length = matrix.length;
    let firstRow = matrix[0]
    let lastCol = []
    let middleRows = []
    let lastRow = matrix[length - 1].reverse()

    for (let row = 0; row < length - 1; row++) {
        if (row !== 0) {
            length
            lastCol.push(matrix[row][matrix[row].length - 1])
        }
        if (row !== 0) {
            for (let col = 0; col < matrix[row].length - 1; col++) {
                col
                console.log(matrix[row][col])
                middleRows.push(matrix[row][col])
            }
        }
        console.log(matrix[row])
        // for (let column = 0; column < matrix[row].length; column++) {
        //     console.log(matrix[row][0])
        // }
    }

    firstRow
    lastCol
    middleRows
    order = order.concat(firstRow).concat(lastCol).concat(lastRow).concat(middleRows)
    console.log(order)
    return order
};

Input =
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
Input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
//Output: [1,2,3,6,9,8,7,4,5]
x = spiralOrder(Input)
x