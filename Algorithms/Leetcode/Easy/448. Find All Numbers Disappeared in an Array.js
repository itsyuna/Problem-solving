const findDisappearedNumbers = function (nums) {
  const answer = [];
  const saveNumber = new Map();

  for (let i = 1; i < nums.length + 1; i++) {
    saveNumber.set(i, 0);
  }

  const distinctNumber = new Set(nums);

  for (const num of distinctNumber) {
    if (saveNumber.has(num)) saveNumber.set(num, 1);
  }

  for (const [key, value] of saveNumber.entries()) {
    if (value === 0) answer.push(key);
  }

  return answer;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]
