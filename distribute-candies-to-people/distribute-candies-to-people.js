/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  var candyCount = 1;
  var person = 0;
  var candyDistr = [];
  for (var i = 0; i < num_people; i++) {
    candyDistr.push(0);
  }
  while (candies > candyCount) {
    candyDistr[person] += candyCount;
    candies -= candyCount;
    candyCount++;
    if (person + 1 === num_people) {
      person = 0;
    } else {
      person += 1;
    }
  }
  candyDistr[person] += candies;
  return candyDistr;
};