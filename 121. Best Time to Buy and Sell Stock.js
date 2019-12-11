/**
 * @param {number[]} prices
 * @return {number}
 */

// var maxProfit = function(prices) {
//     let max = 0;
//     let min = Infinity;

//     for(let i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         min
//         max = Math.max(max, prices[i] - min);
//     }    
    
//     return max;
// };

// var maxProfit = function (prices) {
//     for (let i = 0; i < prices.length; i++) {
//         v = getMaxElement(i, prices)
//         v
//         if (v > prices[i]) {
//             return prices.length <= 2 ? prices.indexOf(v) : prices.indexOf(v) + 1
//         }
//     }
//     return 0

// };

// let getMaxElement = (i, prices) => {
//     let v = []
//     for (let k = i + 1; k < prices.length; k++) {
//         v.push(prices[k])
//     }
//     v
//     return Math.max(...v)
// }

Input = [1, 4, 2]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

x = maxProfit(Input)
x