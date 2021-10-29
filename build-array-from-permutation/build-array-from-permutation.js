/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  var result = nums.splice();
  for (var i = 0; i < nums.length; i++) {
    result[i] = nums[nums[i]];
  }
  return result;
};