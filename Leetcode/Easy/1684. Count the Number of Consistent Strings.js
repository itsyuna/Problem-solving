const countConsistentStrings = function (allowed, words) {
  let count = 0;

  for (const word of words) {
    const set = new Set(word);
    const newWord = [...set];

    let notAllowedLetter = 0;
    for (const letter of newWord) {
      if (!allowed.includes(letter)) {
        notAllowedLetter++;
        break;
      }
    }

    if (notAllowedLetter > 0) count++;
  }

  return words.length - count;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])); // 2
console.log(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])); // 7
console.log(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])); // 4
