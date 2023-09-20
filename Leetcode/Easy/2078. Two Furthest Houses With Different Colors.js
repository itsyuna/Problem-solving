const maxDistance = function (colors) {
  let start = 0;
  const end = colors.length - 1;
  if (colors.length === 2) return 1;
  if (colors[start] !== colors[end]) return end;

  let maxDistance = 0;

  while (start < end) {
    if (colors[start] !== colors[end]) {
      maxDistance = Math.max(maxDistance, start, end - start);
    }
    start++;
  }

  return maxDistance;
};

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3])); // 4
console.log(maxDistance([0, 1])); // 1
