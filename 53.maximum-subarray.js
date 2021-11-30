/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = -10000;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum >= 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    if (sum >= max) {
      max = sum;
    }
  }
  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
