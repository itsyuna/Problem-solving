const countConsistentStrings = function (allowed, words) {
  let count = 0;

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (!allowed.includes(word[i])) {
        count++;
        break;
      }
    }
  }
  return words.length - count;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])); // 2
console.log(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])); // 7
console.log(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])); // 4
