/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var result = '';
  for (var i = 0; i < strs[0].length; i++) {
    var prefix = strs[0][i];
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i] !== prefix) {
        return result;
      }
    }
    result += prefix;
  }
  return result;
};