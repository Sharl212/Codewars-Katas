/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let firstHalf = 0;
        let secondHalf = 0;

        nums.map((num, k) => {
            if (k > i) {
                firstHalf += num
            }
            if (k < i) {
                secondHalf += num
            }
        })
        
        if (firstHalf == secondHalf) return i
    }
    
    return -1
};

console.timeStamp('Started')
x = pivotIndex([1, 7, 3, 6, 5, 6]) // 3
console.timeStamp('Started')