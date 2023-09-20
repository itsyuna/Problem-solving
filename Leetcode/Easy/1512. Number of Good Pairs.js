// Combination 사용

const numIdenticalPairs = function (nums) {
  const answer = [];

  const helper = function (cur, index) {
    if (cur.length === 2) {
      answer.push([...cur]);
      return;
    }
    for (let i = index; i < nums.length; i++) {
      cur.push(nums[i]);
      helper(cur, i + 1);
      cur.pop();
    }
  };
  helper([], 0);

  let count = 0;
  answer.forEach(elem => (elem[0] === elem[1] ? count++ : count));
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
