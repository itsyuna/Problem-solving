const findAndReplacePattern = function (words, pattern) {
  // pattern을 map에 저장해서, 타겟 패턴 번호(index)만 배열에 담아준다.
  // Ex) pattern = 'abb' -> [0, 1, 1]

  // words를 loop로 돌면서, 똑같이 패턴 번호를 배열에 담아준다.
  // 두 배열을 비교해서 똑같은 배열이면, words의 해당 요소를 answer 배열에 담아준다.

  const answer = [];
  const patternMap = new Map();
  const targetPattern = [];

  for (let i = 0; i < pattern.length; i++) {
    const eachLetter = pattern[i];
    if (!patternMap.has(eachLetter)) {
      patternMap.set(eachLetter, i);
      // 타겟 패턴 번호 저장
      targetPattern.push(i);
      // map에 이미 있다면, 해당 인덱스를 저장하지 않고 원래 가지고 있던 인덱스 값을 push해준다.
    } else targetPattern.push(patternMap.get(eachLetter));
  }

  for (const w of words) {
    const wordsMap = new Map();
    const wordsArr = [];
    for (let i = 0; i < w.length; i++) {
      const eachLetter = w[i];
      if (!wordsMap.has(eachLetter)) {
        wordsMap.set(eachLetter, i);
        wordsArr.push(i);
      } else wordsArr.push(wordsMap.get(eachLetter));
    }
    // 타겟 패턴 배열과 words 요소들의 저장된 패턴 번호 비교
    if (String(wordsArr) === String(targetPattern)) answer.push(w);
  }

  return answer;
};

console.log(findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')); // ["mee","aqq"]
console.log(findAndReplacePattern(['a', 'b', 'c'], 'a')); // ["a","b","c"]
