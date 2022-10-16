const sumOddLengthSubarrays = function (arr) {
  if (arr.length === 1) return arr[0];

  let sum = arr.reduce((prev, cur) => prev + cur, 0);
  if (arr.length === 2) return sum;

  // Sum function
  const newSum = oddList => {
    const oddLenSum = oddList.reduce((prev, cur) => prev + cur, 0);
    return oddLenSum;
  };

  // Odd length array
  for (let i = 0; i < arr.length; i++) {
    const newArr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      newArr.push(arr[j]);

      if (newArr.length % 2 !== 0) {
        sum += newSum(newArr);
      }
    }
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66

console.log(sumOddLengthSubarrays([6, 9, 14, 5, 3, 8, 7, 12, 13, 1])); // 878
