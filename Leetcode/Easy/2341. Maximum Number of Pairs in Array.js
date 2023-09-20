const numberOfPairs = function (nums) {
  const answer = [];

  if (nums.length === 1) return [0, 1];
  if (nums.length === 2) {
    if (nums[0] === nums[1]) return [1, 0];
    return [0, 2];
  }

  nums.sort((a, b) => a - b);
  let count = 0;

  let i = 0;
  while (nums.length > 0) {
    if (nums.length === i) break;
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 2);
      count++;
    } else i++;
  }

  answer.push(count);
  answer.push(nums.length);

  return answer;
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // [3,1]
console.log(numberOfPairs([1, 1])); // [1,0]
console.log(numberOfPairs([0])); // [0,1]

console.log(numberOfPairs([1, 2, 3, 4, 5])); // [0, 5]
console.log(numberOfPairs([70, 57])); // [1, 0]
