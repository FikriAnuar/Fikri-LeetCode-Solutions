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
    //do nothing and i will increment itself
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
  console.log(nums);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== false) {
      return nums[i];
    }
  }
};