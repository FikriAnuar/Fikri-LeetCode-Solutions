/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  var maxCandies = Math.max(...candies);
  var result = [];
  for (var i = 0; i < candies.length; i++) {
    result[i] = (candies[i] + extraCandies >= maxCandies);
  }
  return result;
};