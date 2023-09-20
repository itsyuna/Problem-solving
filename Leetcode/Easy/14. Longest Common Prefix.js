const longestCommonPrefix = function (strs) {
  if (strs.includes('')) return '';

  const set = new Set(strs);
  if (strs.length === 1 || set.size === 1) return strs[0];

  let answer = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][0] !== strs[j][0]) return '';

      if (strs[0][i] === strs[j][i] && j === strs.length - 1) answer += strs[j][i];
      else if (strs[0][i] !== strs[j][i]) return answer;
    }
  }

  return answer;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""

console.log(longestCommonPrefix(['', ''])); // ""
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower'])); // "flower"
