/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    product *= rem;
    sum += rem;
  }
  return product - sum;
};