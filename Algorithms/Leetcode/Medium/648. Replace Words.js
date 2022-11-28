const replaceWords = function (dictionary, sentence) {
  const map = new Map();

  for (const root of dictionary) {
    map.set(root, true);
  }

  const answer = sentence.split(' ').map(word => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      newWord += word[i];

      if (map.has(newWord)) return newWord;
    }

    return word;
  });

  return answer.join(' ');
};

console.log(replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')); // "the cat was rat by the bat"
console.log(replaceWords(['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs')); // "a a b c"

console.log(replaceWords(['a', 'aa', 'aaa', 'aaaa'], 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa')); // "a a a a a a a a bbb baba a"
console.log(replaceWords(['catt', 'cat', 'bat', 'rat'], 'the cattle was rattled by the battery')); // "the cat was rat by the bat"
