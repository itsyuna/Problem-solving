const longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const map = new Map();
  let count = 0;

  for (const char of s) {
    if (map.get(char)) {
      count += 2;
      map.delete(char);
    } else map.set(char, true);
  }

  return map.size > 0 ? count + 1 : count;
};

console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('a')); // 1
