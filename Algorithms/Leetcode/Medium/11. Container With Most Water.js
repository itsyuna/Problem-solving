const maxArea = function (height) {
  if (height.length === 2) return Math.min(...height);

  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, currentArea);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
