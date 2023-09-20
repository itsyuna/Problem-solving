const checkIfPangram = function (sentence) {
  const set = new Set(sentence);

  if (set.size < 26) return false;
  return true;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram('leetcode')); // false
