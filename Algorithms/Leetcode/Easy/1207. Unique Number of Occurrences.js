const uniqueOccurrences = function (arr) {
  const map = new Map();
  const count = 1;

  for (const elem of arr) {
    if (!map.has(elem)) {
      map.set(elem, count);
    } else {
      map.set(elem, map.get(elem) + 1);
    }
  }

  const countArr = [];
  for (const value of map.values()) {
    countArr.push(value);
  }

  const set = new Set(countArr);

  if (countArr.length === set.size) return true;

  return false;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
