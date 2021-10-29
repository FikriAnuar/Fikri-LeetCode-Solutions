/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  var count = 0;
  var curLimit = arr.length;
  var curLength = 1;
  while (curLimit > 0) {
    for (var i = 0; i < curLimit; i++) {
      for (var j = i; j < i + curLength; j++) {
        count += arr[j];
      }
    }
    curLimit -= 2;
    curLength +=2;
  }
  return count;
};