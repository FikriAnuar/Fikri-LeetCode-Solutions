/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  var max = 1;
  for (var i = 0; i < n.length; i++) {
    if (max === 9) {
      return 9;
    }
    if (n[i] > max) {
      max = n[i];
    }
  }
  return max;
};