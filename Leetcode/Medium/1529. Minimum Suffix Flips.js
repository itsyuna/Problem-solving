const minFlips = function (target) {
  let count = 0;
  let currentNum = '0';

  for (const num of target) {
    if (num !== currentNum) {
      count++;
      currentNum = num;
    }
  }

  return count;
};

console.log(minFlips('10111')); // 3
console.log(minFlips('101')); // 3
console.log(minFlips('00000')); // 0
