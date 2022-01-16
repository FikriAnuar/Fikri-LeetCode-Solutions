/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sumsArray = [];
    let isPositive = true;
    let curSum = 0;
    let allNegative = true;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        if (isPositive) {
          isPositive = false;
          if (curSum !== 0) {
            sumsArray.push(curSum);   
          }
          curSum = nums[i];
        } else {
          curSum += nums[i];
        }
      } else {
        allNegative = false;
        if (isPositive) {
          curSum += nums[i];
        } else {
          isPositive = true;
          sumsArray.push(curSum);
          curSum = nums[i];
        }
      }
    }
    if (allNegative) {
      let lowestNeg = nums[0];
      for (let i = 1; i < nums.length; i++) {
        if (lowestNeg < nums[i]) {
          lowestNeg = nums[i];
        }
      }
      return lowestNeg;
    }
    sumsArray.push(curSum);
    console.log(sumsArray);
    let max = 0;
    curSum = 0;
    for (let i = 0; i < sumsArray.length; i++) {
      if (sumsArray[i] < 0) {
        if (curSum > max) {
            max = curSum;
        }
        if (curSum + sumsArray[i] > 0) {
          curSum += sumsArray[i];
        } else {
          curSum = 0;
        }
      } else {
        curSum += sumsArray[i];
      }
    }
    if (curSum > max) {
      max = curSum;
    }
    return max;
};