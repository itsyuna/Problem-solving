const average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.shift();
  salary.pop();

  const answer = salary.reduce((prev, cur) => prev + cur) / salary.length;

  return answer.toFixed(5);
};

console.log(average([4000, 3000, 1000, 2000])); // 2500.00000
console.log(average([1000, 2000, 3000])); // 2000.00000
