/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.split(' ').length === 1) {
    return s.length;
  }
  var lastWord = 0;
  var lastIndex = s.length - 1;
  if (s[lastIndex] === ' ') {
    return lengthOfLastWord(s.slice(0,-1));
  }
  var noLeftSpace = true;
  while(noLeftSpace) {
    if (s[lastIndex] !== ' ') {
      lastWord++;
      lastIndex -= 1;
    } else {
      return lastWord;
    }
  }
};