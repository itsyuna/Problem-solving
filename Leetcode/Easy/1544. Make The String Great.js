const makeGood = function (s) {
  if (s.length === 1) return s;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const lastChar = stack[stack.length - 1] || '';
    if (s[i] !== lastChar && s[i].toLowerCase() === lastChar.toLowerCase()) stack.pop();
    else stack.push(s[i]);
  }

  return stack.join('');
};

console.log(makeGood('leEeetcode')); // "leetcode"
console.log(makeGood('abBAcC')); // ""
console.log(makeGood('s')); // "s"
