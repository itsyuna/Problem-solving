const merge = function (nums1, m, nums2, n) {
  nums2.forEach(num => {
    nums1.unshift(num);
    nums1.pop();
  });

  return nums1.length === 1 ? nums1 : nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
