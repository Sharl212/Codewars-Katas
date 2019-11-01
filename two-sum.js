/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        for (let k = 0; k < length; k++) {
            if (i !== k && nums[k] + nums[i] == target) {
                return [i, k]
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))