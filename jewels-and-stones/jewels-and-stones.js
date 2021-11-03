/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  var total = 0;
  for (var i = 0; i < stones.length; i++) {
    for (var j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        total++;
        break;
      }
    }
  }
  return total;
};