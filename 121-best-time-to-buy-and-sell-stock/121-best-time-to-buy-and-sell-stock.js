/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0;
  var curMin = prices[0];
  var curMax = prices[0];
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < curMin) {
      curMin = prices[i];
      curMax = prices[i];
    } else if (prices[i] > curMax) {
      curMax = prices[i];
      if (curMax - curMin > profit) {
        profit = curMax - curMin;
      }
    }
  }
  return profit;
};