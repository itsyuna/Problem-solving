const findNumbers = function (nums) {
  const newNums = [];
  let count = 0;

  for (const num of nums) {
    newNums.push(num.toString().length);
  }

  for (let i = 0; i < newNums.length; i++) {
    if (newNums[i] % 2 === 0) count++;
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1
