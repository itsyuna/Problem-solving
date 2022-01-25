const minMovesToSeat = function (seats, students) {
  let count = 0;

  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  for (let i = 0; i < seats.length; i++) {
    count += Math.abs(seats[i] - students[i]);
  }
  return count;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 4
