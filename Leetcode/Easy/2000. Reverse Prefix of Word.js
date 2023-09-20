const reversePrefix = function (word, ch) {
  // ch에 해당하는 idx 구하기
  const idx = word.indexOf(ch);

  // ch가 word에 없는 경우
  if (idx === -1) {
    return word;
  }

  // ch가 word에 있는 경우
  if (idx >= 0) {
    // ch에 해당하는 부분까지 잘라주기
    const tempStr = word.slice(0, idx + 1);
    // ch 뒷부분부터 끝까지 잘라주기
    const remain = word.slice(idx + 1, word.length);
    const reversed = tempStr.split('').reverse().join('');
    return reversed + remain;
  }
};

console.log(reversePrefix('abcdefd', 'd')); // "dcbaefd"
console.log(reversePrefix('xyxzxe', 'z')); // "zxyxxe"
console.log(reversePrefix('abcd', 'z')); // "abcd"
