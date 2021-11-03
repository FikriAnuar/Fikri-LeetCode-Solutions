/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  var days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  } 
  var totalDays = 4;
  totalDays += (year - 1971) * 365 + Math.ceil((year - 1972) / 4);
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    var daysOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    var daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  for (var i = 0; i < month - 1; i++) {
    totalDays += daysOfMonths[i];
  }
  totalDays += day;
  var numOfDay = totalDays % 7;
  return days[numOfDay];
};