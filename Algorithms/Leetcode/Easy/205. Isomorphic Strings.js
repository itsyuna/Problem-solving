const isIsomorphic = function (s, t) {
  function saveChar(word) {
    const map = new Map();

    for (let i = 0; i < word.length; i++) {
      if (!map.has(word[i])) map.set(word[i], i);
    }

    return map;
  }

  const word1 = saveChar(s);
  const word2 = saveChar(t);

  function checkIndexOrder(word, map) {
    const newWord = [];

    for (const char of word) {
      newWord.push(map.get(char));
    }

    return newWord;
  }

  const newWord1 = checkIndexOrder(s, word1);
  const newWord2 = checkIndexOrder(t, word2);

  for (let i = 0; i < newWord1.length; i++) {
    if (newWord1[i] !== newWord2[i]) return false;
  }

  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true

console.log(isIsomorphic('abcdefghijklmnopqrstuvwxyzva', 'abcdefghijklmnopqrstuvwxyzck')); // false
