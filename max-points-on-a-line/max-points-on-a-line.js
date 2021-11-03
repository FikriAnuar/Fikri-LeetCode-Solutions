/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length === 1) {
    return 1;
  }
  var slopes = [];
  for (var i = 0; i < points.length; i++) {
    slopes.push({});
    for (var j = 0; j < points.length; j++) {
      var slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0])
      slopes[i][slope] = slopes[i][slope] + 1 || 1;
    }
  }
  var max = 0;
  for (var i = 0; i < slopes.length; i++) {
    curMax = 0;
    for (var key in slopes[i]) {
      if (slopes[i][key] > curMax) {
        curMax = slopes[i][key];
      }
    }
    if (curMax > max) {
      max = curMax;
    }
  }
  return max + 1;
};