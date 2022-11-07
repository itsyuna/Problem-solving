const countPrefixes = function (words, s) {
  let count = 0;

  for (const word of words) {
    if (s.match('^' + word)) count++;
  }

  return count;
};

console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')); // 3
console.log(countPrefixes(['a', 'a'], 'aa')); // 2
