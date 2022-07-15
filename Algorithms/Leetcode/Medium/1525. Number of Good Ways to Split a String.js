// Time Limit Exceeded
const numSplits = function (s) {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    let left = s.slice(0, i);
    let right = s.slice(i);

    const setLeft = new Set(left);
    const setRight = new Set(right);
    if (setLeft.size === setRight.size) count++;

    left = '';
    right = '';

    setLeft.clear();
    setRight.clear();
  }

  return count;
};

console.log(numSplits('aacaba')); // 2
console.log(numSplits('abcd')); // 1
