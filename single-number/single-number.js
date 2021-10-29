/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var count = {};
  for (var i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1 || 1;
  }
  for (var i = 0; i < nums.length; i++) {
    if (count[nums[i]] === 1) {
      return nums[i];
    }
  }
};