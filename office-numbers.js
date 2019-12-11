/**
 * @param {character[][]} grid
 * @return {number}
 */
function numOffices(grid) {
    let result = 0;
    console.log(grid)
    //Put your code here.
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i].filter((x, h) => x == 1 && grid[i][h - 1] == 0 && grid[i][h + 1] == 0).length)
        if (grid[i].filter((x, h) => x == 1 && grid[i][h - 1] == 0 && grid[i][h + 1] == 0).length == 1) {
            console.log(grid[i])
            result++
        } else {
            for (let k = 0; k < grid[i].length; k++) {
                let nextRow = grid[i + 1] || []
                if (grid[i][k] == 1 && nextRow[k] == 1) {
                    console.log(grid[i], i)
                    result++

                    if (i + 1 < grid.length) {
                        i += 1
                    }
                } else if (grid[i][k] == 1 && grid[i][k + 1] == 1) {
                    result++
                    console.log(grid[i], i)
                }
            }
        }

        // count
    }
    result
    return result;
};

// numOffices(
//     // [[1, 1, 0, 0, 0],
//     // [1, 1, 0, 0, 0],
//     // [0, 0, 1, 0, 0],
//     // [0, 0, 0, 1, 1]]
//     [[1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 1]]
// )

let height = 4
let width = 5
let grid = [];
let arr = [
    '1100',
    '11000',
    '01011',
    '00011'
]
for (var i = 0; i < height; i++) {
    grid[i] = (arr[i] || "").split("");
}

console.log(numOffices(grid));



// 4 - number of rows
// 5 - number of columns
// 11110
// 11010
// 11000
// 00000