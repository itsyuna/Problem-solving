const repeatedCharacter = function (s) {
  const map = new Map();

  for (const letter of s) {
    if (!map.has(letter)) map.set(letter, 1);
    else return letter;
  }
};

console.log(repeatedCharacter('abccbaacz')); // c
console.log(repeatedCharacter('abcdd')); // d
