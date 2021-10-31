/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var sChars = {};
  var tChars = {};
  for (var i = 0; i < s.length; i++) {
    if (sChars[s[i]] === undefined) {
      sChars[s[i]] = t[i];
    } else {
      if (t[i] !== sChars[s[i]]) {
        return false;
      }
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (tChars[t[i]] === undefined) {
      tChars[t[i]] = s[i];
    } else {
      if (s[i] !== tChars[t[i]]) {
        return false;
      }
    }
  }
  return true;
};