/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let calculated = {0: 1, 1:1};
  let doStep = (numSteps) => {
    if (!calculated[numSteps]) {
      calculated[numSteps] = doStep(numSteps - 1) + doStep(numSteps-2);
    }
    return calculated[numSteps];
  }
  return doStep(n);
};