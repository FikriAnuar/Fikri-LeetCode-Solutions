/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  var sum = 0;
  var sums = [];
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    sums.push(sum);
  }
  return sums;    
};