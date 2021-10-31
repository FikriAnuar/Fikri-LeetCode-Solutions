/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var chars = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      chars.push(s[i]);
    } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      var lastPar = chars[chars.length - 1];
      if (s[i] === ')' && lastPar === '(') {
        chars.pop();
      } else if (s[i] === ']' && lastPar === '[') {
        chars.pop();
      } else if (s[i] === '}' && lastPar === '{') {
        chars.pop();
      } else {
        return false;
      }
    }
  }
  if (chars.length === 0) {
    return true;
  }
  return false;
};