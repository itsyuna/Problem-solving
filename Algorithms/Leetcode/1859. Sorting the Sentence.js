const sortSentence = function (s) {
  const answer = [];
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const num = word[word.length - 1];

    answer[num - 1] = word.slice(0, -1);
  }

  return answer.join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3')); // "This is a sentence"
console.log(sortSentence('Myself2 Me1 I4 and3')); // "Me Myself and I"
