const prefixCount = function (words, pref) {
  const answer = [];
  const newPref = '^' + pref;
  const regExp = new RegExp(newPref, 'g');

  for (const word of words) {
    if (word.match(regExp)) answer.push(word);
  }

  return answer.length;
};

console.log(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')); // 2
console.log(prefixCount(['leetcode', 'win', 'loops', 'success'], 'code')); // 0
