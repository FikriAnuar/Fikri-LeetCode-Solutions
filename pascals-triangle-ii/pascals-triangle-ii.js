/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let output = [1];
  for (let i = 0; i < rowIndex; i++) {
    let nthRow = [];
    nthRow.push(1);
    for (let j = 0; j < output.length - 1; j++) {
      nthRow.push(output[j]+output[j+1]);  
    }
    nthRow.push(1);
    output = nthRow;
  }
  return output;
};