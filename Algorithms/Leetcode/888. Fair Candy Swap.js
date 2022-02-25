const fairCandySwap = function (aliceSizes, bobSizes) {
  const answer = [];

  const sumAliceSize = aliceSizes.reduce((prev, cur) => prev + cur, 0);
  const sumBobSizes = bobSizes.reduce((prev, cur) => prev + cur, 0);

  const mid = (sumAliceSize + sumBobSizes) / 2;

  for (let i = 0; i < aliceSizes.length; i++) {
    const searchNum = mid - (sumAliceSize - aliceSizes[i]);

    if (bobSizes.includes(searchNum)) {
      answer.push(aliceSizes[i], searchNum);
      break;
    }
  }

  return answer;
};

console.log(fairCandySwap([1, 1], [2, 2])); // [1,2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1,2]
console.log(fairCandySwap([2], [1, 3])); // [2,3]
