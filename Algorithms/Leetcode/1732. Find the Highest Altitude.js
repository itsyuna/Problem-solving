const largestAltitude = function (gain) {
  let answer = 0;

  gain.reduce((acc, cValue) => {
    const sum = acc + cValue;

    if (sum > answer) answer = sum;

    return sum;
  }, 0);

  return answer;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
