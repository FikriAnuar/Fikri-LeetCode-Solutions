/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var xString = x.toString();
  if (xString[0] === '-') {
    xString.slice(1);
    xString += '-'
  }
  var reverseString = ''
  for (var i = xString.length - 1; i >= 0; i--) {
    reverseString += xString[i];
  }
  var result = parseInt(reverseString);
  if (result <= -(2**31) || result >= 2**31 - 1) {
    return 0;
  }
  return result;
};