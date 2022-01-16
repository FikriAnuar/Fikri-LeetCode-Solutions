/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0;
  let max = nums.length;
  for (let i = 0; i < max; i++) {
    sum += nums[i];
  }
  return max * (max+1) / 2 - sum;
};