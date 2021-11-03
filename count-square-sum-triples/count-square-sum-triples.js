/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  var count = 0;
  for (var i = 1; i < n ** 2 / 2; i++) {
    for (var j = i + 1; j < n; j++) {
      for (var k = j + 1; k <= n; k++) {
        if (i ** 2 + j ** 2 === k ** 2) {
          count++;
        }
      }
    }
  }
  return count*2;
};