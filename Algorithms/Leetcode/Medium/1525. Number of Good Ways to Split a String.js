// Success
const numSplits = function (s) {
  let count = 0;
  const setLeft = new Set();
  const setRight = new Set();
  const countLeftLetters = [];
  const countRightLetters = [];

  for (let i = 0; i < s.length - 1; i++) {
    setLeft.add(s[i]);
    countLeftLetters.push(setLeft.size);

    setRight.add(s[s.length - 1 - i]);
    countRightLetters.push(setRight.size);
  }

  for (const num of countLeftLetters) {
    if (num === countRightLetters[countRightLetters.length - 1]) count++;

    countRightLetters.pop();
  }

  return count;
};

// Time Limit Exceeded
/*
const numSplits = function (s) {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    let left = s.slice(0, i);
    let right = s.slice(i);

    const setLeft = new Set(left);
    const setRight = new Set(right);
    if (setLeft.size === setRight.size) count++;

    left = '';
    right = '';

    setLeft.clear();
    setRight.clear();
  }

  return count;
};
*/

console.log(numSplits('aacaba')); // 2
console.log(numSplits('abcd')); // 1
