const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const map = new Map();
  for (const num of [...set1]) map.set(num, true);

  const answer = [];
  for (const num of [...set2]) if (map.has(num)) answer.push(num);

  return answer;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
