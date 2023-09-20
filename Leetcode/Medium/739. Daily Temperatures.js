const dailyTemperatures = function (temperatures) {
  const answer = [];
  let start = 0;
  let moveDays = 1;

  while (start < temperatures.length) {
    const countDays = moveDays - start;
    if (temperatures[start] < temperatures[moveDays]) {
      answer.push(countDays);
      start++;
      moveDays = start + 1;
    } else if (moveDays === temperatures.length) {
      answer.push(0);
      start++;
      moveDays = start + 1;
    } else moveDays++;
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
