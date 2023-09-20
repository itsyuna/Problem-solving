const firstUniqChar = function (s) {
  const map = new Map();

  for (const eachLetter of s) {
    const count = 0;
    if (!map.has(eachLetter)) {
      map.set(eachLetter, count + 1);
    } else map.set(eachLetter, map.get(eachLetter) + 1);
  }

  let findLetter = '';

  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      findLetter = key;
      break;
    }
  }

  const answer = s.indexOf(findLetter);
  return findLetter === '' ? -1 : answer;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
