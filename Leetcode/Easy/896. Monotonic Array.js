const isMonotonic = function (nums) {
  const ascendingOrder = [...nums].sort((a, b) => a - b);
  const descendingOrder = [...nums].sort((a, b) => b - a);

  let standardPoint;
  if (nums[0] === ascendingOrder[0]) standardPoint = ascendingOrder;
  else standardPoint = descendingOrder;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== standardPoint[i]) return false;
  }

  return true;
};

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); // false
