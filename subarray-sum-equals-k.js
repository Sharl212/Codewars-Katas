/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, t) {
    let length = nums.length
    let count = 0

    for (let i = 0; i < length; i++) {
        let total = 0
        let isStart = true
        if (t == nums[i]) {
            count++
        }

        for (let k = i + 1; k < length; k++) {
            if (isStart) {
                total += nums[i] + nums[k]
            } else {
                total += nums[k]
            }
            isStart = false
            if (total == t) {
                count++
            }
        }
    }
    return count
};

subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0)