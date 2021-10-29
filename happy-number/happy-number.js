/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sum = 0;
  while (n >= 10) {
    var onesDigit = n % 10;
    sum += onesDigit**2;
    n = Math.floor(n/10);
  }
  sum += n**2;
  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    return isHappy(sum);
  }
};