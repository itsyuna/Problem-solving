const maximumWealth = function (accounts) {
  const answer = [];

  for (const account of accounts) {
    const accountSum = account.reduce((a, b) => a + b, 0);
    answer.push(accountSum);
  }
  return Math.max(...answer);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // 10
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
); // 17
