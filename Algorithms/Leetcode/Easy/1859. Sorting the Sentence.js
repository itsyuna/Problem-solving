const sortSentence = function (s) {
  const newS = s
    .split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .join(' ');

  const answer = newS.replace(/[0-9]/g, '');
  return answer;
};

console.log(sortSentence('is2 sentence4 This1 a3')); // "This is a sentence"
console.log(sortSentence('Myself2 Me1 I4 and3')); // "Me Myself and I"
