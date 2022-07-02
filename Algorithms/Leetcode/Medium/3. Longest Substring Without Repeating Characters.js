const lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let moveIdx = 0;
  let tempLength = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else {
      tempLength = i - moveIdx;
      map.clear();
      maxLength = Math.max(tempLength, maxLength);
      i = moveIdx;
      moveIdx++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3

console.log(lengthOfLongestSubstring('dvdf')); // 3
