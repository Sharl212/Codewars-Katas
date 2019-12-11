/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let sorted = [...heights].sort((a, b) => a - b)
    let count = 0;

    heights.map((height, i)=> {
        if (sorted[i] !== height) {
            count++
        }
    })

    count
    return count
};

heightChecker([2, 1, 2, 1, 1, 2, 2, 1])