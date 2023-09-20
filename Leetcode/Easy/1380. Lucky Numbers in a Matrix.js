const luckyNumbers = function (matrix) {
  const minNum = [];
  const maxNum = [];

  for (let i = 0; i < matrix.length; i++) {
    minNum.push(Math.min(...matrix[i]));
  }

  for (let i = 0; i < matrix[0].length; i++) {
    const arr = [];
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
    }

    maxNum.push(Math.max(...arr));
  }

  const answer = minNum.filter(elem => maxNum.includes(elem));
  return answer;
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
); // [15]
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
); // [12]
console.log(
  luckyNumbers([
    [7, 8],
    [1, 2],
  ])
); // [7]
