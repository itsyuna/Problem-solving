// You must solve it in O(n) time complexity.
const findKthLargest = function (nums, k) {
  let answer;
  nums.sort((a, b) => b - a);

  nums.forEach((num, idx) => {
    if (k === idx + 1) answer = num;
  });

  return answer;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
