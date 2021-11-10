/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (i === j) {
      j++;
    }
    while (nums[j] === false) {
      j++;
    }
    if (j === nums.length) {
      break;
    }
    if (nums[i] === false) {
    } else {
      while (nums[i] === nums[j]) {
        j++;
      }
      if (j === nums.length) {
        break;
      }      
      nums[i] = false;
      nums[j] = false;
    }
  }
  for (var l = 0; l < nums.length; l++) {
    if (nums[l] !== false) {
      return nums[l];
    }
  }
};