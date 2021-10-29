/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  var maxWealth = 0;
  for (var i = 0; i < accounts.length; i++) {
    var wealth = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }
  return maxWealth;
};