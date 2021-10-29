/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let result = 0;
  for (var i = 0; i < n; i++) {
    result = result ^ (start + 2*i);
  }
  return result;
};