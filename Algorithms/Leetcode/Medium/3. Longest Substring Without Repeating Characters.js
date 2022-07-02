const lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;

  const map = new Map();
  let moveIdx = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (moveIdx === s.length - 1) break;

    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else {
      map.clear();
      i = moveIdx;
      moveIdx++;
    }
    maxLength = Math.max(map.size, maxLength);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3

console.log(lengthOfLongestSubstring('dvdf')); // 3
console.log(lengthOfLongestSubstring(' ')); // 1
