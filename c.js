/**
 * @param {character[][]} grid
 * @return {number}
 */
function numOffices(grid) {
    let result = 0;
    console.log(grid)
    //Put your code here.
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i])
        if (grid[i].find(x => x == 0) == undefined) {
            console.log('not valid')
        }
        else if (grid[i].filter((x, h) => x == 1 && grid[i][h - 1] == 0 && grid[i][h + 1] == 0).length == 1) {
            console.log(grid[i])
            result++
        }
        else {
            let indicesChecked=[]
            for (let k = 0; k < grid[i].length; k++) {
                let nextRow = grid[i + 1] || []
                if(indicesChecked.find(previousI=> previousI==i) !== undefined) {
                    console.log('checked before')
                }else
                if (grid[i][k] == 1 && nextRow[k] == 1) {
                    console.log(grid[i], i)
                    result++
                    indicesChecked.push(i)

                    if (i + 1 < grid.length) {
                        i += 1
                        console.log('skipped ', i)
                    }
                } else if (grid[i][k] == 1 && grid[i][k + 1] == 1) {
                    indicesChecked.push(i)
                    result++
                    console.log(i, k)
                }
            }
        }

        // count
    }
    result
    return result;
};

let height = 4
let width = 5
let grid = [];
let arr = [
    "11111",
    "10001",
    "10000",
    "11101"
]
for (var i = 0; i < height; i++) {
    grid[i] = (arr[i] || "").split("");
}

// console.log(numOffices(grid));


const countContinuesSpace = (row) => {
    let count = 0;
    for (let n = 0; n < row.length; n++) {
        if (row[n] == 1 && row[n - 1] == 1 || n == 0 && row[n] == 1) {
            n
            count++
        }
    }
    count
    return count;
}
countContinuesSpace(["1", "0", "1", "0", "0"])
numOffices(
    // [[1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 0],
    // [0, 0, 1, 0, 0],
    // [0, 0, 0, 1, 1]]
    [[1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 1]]
)


// 4 - number of rows
// 5 - number of columns
// 11110
// 11010
// 11000
// 00000