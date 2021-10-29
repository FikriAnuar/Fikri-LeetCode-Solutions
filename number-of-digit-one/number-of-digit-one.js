/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  var count = 0;
  var tens = 0;
  var curNum = n;
  while (curNum > 0) {
    var digit = curNum % 10;
    curNum = Math.floor(curNum/10);
    if (digit === 0) {
      count += curNum*10**tens;
    } else if (digit === 1) {
      count += curNum*10**tens + n % 10**tens + 1;
    } else {
      count += (curNum+1)*10**tens;   
    }
    tens++;
  }
  return count;
};