/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  if (target.length === arr.length) {
    var sortedTarget = target.sort();
    var sortedArr = arr.sort();
    for (var i = 0; i < target.length; i++) {
      if (sortedTarget[i] !== sortedArr[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
    
};