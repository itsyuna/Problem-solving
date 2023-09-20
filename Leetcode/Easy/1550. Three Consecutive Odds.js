// Solution 1 (85ms / 42.5MB)
const threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) return true;
  }

  return false;
};

// Solution 2 (64ms / 42.3MB)
/*
const threeConsecutiveOdds = function (arr) {
  return arr.some((num, idx) => num % 2 && arr[idx + 1] % 2 && arr[idx + 2] % 2);
};
*/

console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
