const minOperations = function (boxes) {
  const idxOfOne = [];
  boxes.split('').filter((num, idx) => {
    if (num === '1') idxOfOne.push(idx);
  });

  const answer = [];

  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (const idx of idxOfOne) {
      sum += Math.abs(idx - i);
    }
    answer.push(sum);
  }

  return answer;
};

console.log(minOperations('110')); // [1,1,3]
console.log(minOperations('001011')); // [11,8,5,4,3,4]
