/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  var reducer = (prevValue, curValue) => prevValue + (curValue.toString().length % 2 === 0);
  return nums.reduce(reducer, 0);
};