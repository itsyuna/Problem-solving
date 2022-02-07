const findAndReplacePattern = function (words, pattern) {
  const res = [];
  const map = new Map();
  const map2 = new Map();

  for (const word of words) {
    map.clear();
    map2.clear();

    let count = 0;

    for (let i = 0; i < pattern.length; i++) {
      if (map.has(word[i])) {
        if (map.get(word[i]) === pattern[i]) count++;
        else break;
      } else {
        if (map2.has(pattern[i])) break;
        map.set(word[i], pattern[i]);
        map2.set(pattern[i], true);
        count++;
      }
    }

    if (count === pattern.length) res.push(word);
  }

  return res;
};

console.log(findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')); // ["mee","aqq"]
console.log(findAndReplacePattern(['a', 'b', 'c'], 'a')); // ["a","b","c"]
