const areOccurrencesEqual = function (s) {
  if (s.length === 1) return true;

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const arr = [];
  for (const values of map.values()) {
    arr.push(values);
  }

  const set = new Set(arr);

  if (set.size === 1) return true;
  return false;
};

console.log(areOccurrencesEqual('abacbc')); // true
console.log(areOccurrencesEqual('aaabb')); // false
