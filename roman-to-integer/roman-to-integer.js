/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var num = 0;
  var vals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  for (var i = 0; i < s.length; i++) {
    num += vals[s[i]];
    if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      num -= 2;
    }
    if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
      num -= 20;
    }
    if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
      num -= 200;
    }
  }
  return num;
};