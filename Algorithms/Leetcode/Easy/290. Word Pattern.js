const wordPattern = function (pattern, s) {
  const map = new Map();

  const eachLetter = pattern.split('');
  const eachWord = s.split(' ');

  // 요소 개수가 다를 경우 바로 false 반환
  if (eachLetter.length !== eachWord.length) return false;

  for (let i = 0; i < eachLetter.length; i++) {
    if (!map.has(eachLetter[i])) {
      map.set(eachLetter[i], eachWord[i]);
    } else if (map.has(eachLetter[i]) && map.get(eachLetter[i]) !== eachWord[i]) {
      return false;
    }
  }

  const valueArr = [];
  for (const v of map.values()) {
    valueArr.push(v);
  }

  const set = new Set(valueArr);

  const arrSet = [...set];

  if (arrSet.length !== valueArr.length) return false;
  
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
