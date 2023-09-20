const largestAltitude = function (gain) {
  let answer = 0;

  gain.reduce((prev, acc) => {
    const sum = prev + acc;

    if (sum > answer) answer = sum;

    return sum;
  }, 0);

  return answer;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
