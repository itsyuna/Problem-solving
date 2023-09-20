const canConstruct = function (ransomNote, magazine) {
  const letterList = {};

  for (const letter of magazine) {
    letterList[letter] = (letterList[letter] || 0) + 1;
  }

  for (const letter of ransomNote) {
    if (!letterList[letter]) return false;
    letterList[letter]--;
  }

  return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true

console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj')); // true
