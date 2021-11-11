/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var strsArrSorted = [];
  for (let i = 0; i < strs.length; i++) {
    strsArrSorted.push(strs[i].split('').sort().join(''));
  }
  var uniqueWord = {};
  var index = 0;
  for (let i = 0; i < strsArrSorted.length; i++) {
    if (uniqueWord[strsArrSorted[i]] === undefined) {
      uniqueWord[strsArrSorted[i]] = index;
      index++;
    }
  }
  var result = [];
  for (let i = 0; i < index; i++) {
    result.push([]);
  }
  for(let i = 0; i < strs.length;i ++) {
    var strIndex = uniqueWord[strsArrSorted[i]];
    result[strIndex].push(strs[i]);
  }
  return result;
};