/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let output = [[1]];
  for(let i = 1; i < numRows; i++) {
    let nthRow = [];
    nthRow.push(1);
    for (let j = 0; j < output[i-1].length - 1; j++) {
      nthRow.push(output[i-1][j] + output[i-1][j + 1]);
    }
    nthRow.push(1)
    output.push(nthRow);
  }
  return output;
};