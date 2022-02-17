const sumZero = function (n) {
  let sum = 0;
  const answer = [];

  for (let i = 1; i < n; i++) {
    sum += i;
    answer.push(i);
  }
  answer.push(-sum);

  return answer;
};

console.log(sumZero(5)); // [-7,-1,1,3,4]
console.log(sumZero(3)); // [-1,0,1]
console.log(sumZero(1)); // [0]
