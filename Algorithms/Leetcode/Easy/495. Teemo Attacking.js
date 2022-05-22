const findPoisonedDuration = function (timeSeries, duration) {
  let answer = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    answer += timeSeries[i] - timeSeries[i - 1] < duration ? timeSeries[i] - timeSeries[i - 1] : duration;
  }

  answer += duration;
  return answer;
};

console.log(findPoisonedDuration([1, 4], 2)); // 4
console.log(findPoisonedDuration([1, 2], 2)); // 3
