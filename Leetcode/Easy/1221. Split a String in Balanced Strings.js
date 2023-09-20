const balancedStringSplit = function (s) {
  let count = 0;
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);

    if (map.get('R') === map.get('L')) {
      count++;
      map.clear();
    }
  }

  return count;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLRRRLLRLL')); // 2
console.log(balancedStringSplit('LLLLRRRR')); // 1
