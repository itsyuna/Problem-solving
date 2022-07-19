const maxCoins = function (piles) {
  let answer = 0;

  let count = piles.length / 3;

  piles.sort((a, b) => b - a);

  if (piles.length === 3) return piles[1];

  let i = 1;
  while (count > 0) {
    answer += piles[i];
    i += 2;
    count -= 1;
  }

  return answer;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8])); // 9
console.log(maxCoins([2, 4, 5])); // 4
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])); // 18
