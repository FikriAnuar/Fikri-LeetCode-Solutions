/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  var counts = [];
  for (var i = 0; i < nums.length; i++) {
    var smaller = 0;
      for (var j = 0; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          smaller++;
        }
      }
    counts.push(smaller);
  }
  return counts;
};