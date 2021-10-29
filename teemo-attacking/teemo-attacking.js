/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  var totalTime = 0;
  var current = timeSeries[0];
  for (var i = 0; i < timeSeries.length; i++) {
    if (i === timeSeries.length -1 || timeSeries[i+1] > timeSeries[i] + duration) {
      totalTime += timeSeries[i] + duration - current;
      current = timeSeries[i+1] || 0;
    }
  }
  return totalTime;
};