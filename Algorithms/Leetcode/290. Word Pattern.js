const wordPattern = function (pattern, s) {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const set = new Set();
  const hash = {};

  for (let i = 0; i < pattern.length; i++) {
    const currPattern = pattern[i];
    const currWord = words[i];
    if (!hash[currPattern] && !set.has(currWord)) {
      hash[currPattern] = currWord;
      set.add(currWord);
    } else if (hash[currPattern] !== currWord) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
