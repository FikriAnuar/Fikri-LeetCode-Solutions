/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  var steps = 0;
  var sortedSeats = seats.sort((a,b) => a - b);
  var sortedStudents = students.sort((a,b) => a - b);
  for (var i = 0; i < sortedSeats.length; i++) {
    steps += Math.abs(sortedSeats[i] - sortedStudents[i])
  }
  return steps;
};