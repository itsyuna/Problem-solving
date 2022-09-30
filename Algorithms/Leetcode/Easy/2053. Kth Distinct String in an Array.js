const kthDistinct = function (arr, k) {
  const map = new Map();

  for (const char of arr) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const distinctStrList = [];
  for (const [key, value] of map.entries()) {
    if (value === 1) distinctStrList.push(key);
  }

  if (distinctStrList.length < k) return '';

  let answer = '';
  distinctStrList.forEach((char, idx) => {
    if (k === idx + 1) answer = char;
  });

  return answer;
};

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)); // "a"
console.log(kthDistinct(['aaa', 'aa', 'a'], 1)); // "aaa"
console.log(kthDistinct(['a', 'b', 'a'], 3)); // ""
