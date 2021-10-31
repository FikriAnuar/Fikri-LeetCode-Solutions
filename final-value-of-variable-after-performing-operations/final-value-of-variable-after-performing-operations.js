/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  var result = 0;
  for (var i = 0; i < operations.length; i++) {
    if (operations[i].includes('+')) {
      result++;    
    } else {
      result--;
    }
  }
  return result;
};