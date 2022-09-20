const canConstruct = function (s, k) {
  if (s.length === k) return true;
  if (s.length < k) return false;

  const map = new Map();
  for (const char of s) {
    map.set(char, !map.get(char));
  }

  let count = k;
  for (const value of map.values()) {
    if (value) {
      count--;
      if (count < 0) return false;
    }
  }

  return true;
};

console.log(canConstruct('annabelle', 2)); // true
console.log(canConstruct('leetcode', 3)); // false
console.log(canConstruct('true', 4)); // true

console.log(canConstruct('cr', 7)); // false
