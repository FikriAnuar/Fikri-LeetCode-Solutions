/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let combinations = [];
  for (let i = 0; i < digits.length; i++) {
    const chars = letters[digits[i]];
    if (combinations.length === 0) {
      for (let j = 0; j < chars.length; j++) {
        combinations.push(chars[j]);
      }
    } else {
      let newCombinations = [];
      for (let j = 0; j < chars.length; j++) {
        for (let k = 0; k < combinations.length; k++) {
          newCombinations.push(combinations[k] + chars[j]);
        }
      }
      combinations = newCombinations;
    }
  }
  return combinations;
};