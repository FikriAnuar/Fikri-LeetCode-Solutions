/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  var newArray = [];
  for (var i = 0; i < n; i++) {
    newArray[2*i] = nums[i];
    newArray[2*i+1] = nums[n + i];
  }
  return newArray;
};