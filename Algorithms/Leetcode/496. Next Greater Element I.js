const nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const answer = [];

  for (const num1 of nums1) {
    for (let i = 0; i < nums2.length; i++) {
      if (num1 === nums2[i] && num1 < nums2[i + 1]) {
        map.set(num1, nums2[i + 1]);
      } else if (num1 === nums2[i] && num1 > nums2[i + 1]) {
        map.set(num1, -1);
      }

      if (num1 === nums2[i] && i === nums2.length - 1) {
        map.set(num1, -1);
      }
    }
  }

  for (const v of map.values()) {
    answer.push(v);
  }

  return answer;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
