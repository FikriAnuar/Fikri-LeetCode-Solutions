/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    result.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    result[nums[i]-1] = 0;
  }
  return result.filter(num => num !== 0);
};