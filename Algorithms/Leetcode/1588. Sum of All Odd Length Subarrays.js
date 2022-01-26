const sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      newArr = arr.slice(i, j);
      if (newArr.length % 2 != 0) {
        sum += newArr.reduce((acc, cur) => acc + cur);
      }
    }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66
