/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  var hold = indices.splice();
  for (var i = 0; i < s.length; i++) {
    hold[indices[i]] = s[i];
  }
  return hold.join('');
};