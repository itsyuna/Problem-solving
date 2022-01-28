// 1.
const uniqueOccurrences = function (arr) {
  const map = new Map();

  arr.forEach(num => {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  });

  const set = new Set();

  const val = [...map.values()];

  for (let i = 0; i < val.length; i++) {
    const v = val[i];

    if (set.has(v)) {
      return false;
    }
    set.add(v);
  }

  return true;
};

// 2.
/*
const uniqueOccurrences = function (arr) {
  const map = {};

  for (const i of arr) {
    map[i] ? map[i]++ : (map[i] = 1);
  }

  const val = Object.values(map);
  const set = [...new Set(val)];

  return val.length === set.length;
};
*/

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
