/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var parsedString = '';
  for (var i = 0; i < s.length; i++) {
    if ((/^[a-z0-9]+$/i).test(s[i])) {
      if (/[a-zA-Z]/) {
        parsedString += s[i].toLowerCase();  
      } else {
        parsedString += s[i];
      }
    }
  }
  var endIndex = parsedString.length-1;
  for (var i = 0; i <= parsedString.length / 2; i++) {
    if (parsedString[i] !== parsedString[endIndex]) {
      return false;
    }
    endIndex--;
  }
  return true;
};