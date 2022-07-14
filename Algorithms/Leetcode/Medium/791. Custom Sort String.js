const customSortString = function (order, s) {
  const answer = [];

  // s에 있는 order 문자들만 추출해서 더하기 (순서 유지 보장)
  for (const char of order) {
    const regExp = new RegExp(char, 'g');
    const includeChar = s.match(regExp);
    if (includeChar !== null) answer.push(includeChar);
  }

  // 배열 -> 문자열로 변경
  const existString = answer.flat().join('');

  // existString과 s를 비교해서, 존재하지 않는 문자 추출
  let noExistChar = '';
  for (const char of s) {
    if (existString.includes(char) === false) noExistChar += char;
  }

  // 존재하지 않는 문자가 있다면, existString 뒤에 붙여준다.
  return noExistChar.length === 0 ? existString : existString + noExistChar;
};

console.log(customSortString('cba', 'abcd')); // "cbad"
console.log(customSortString('cbafg', 'abcd')); // "cbad"

console.log(customSortString('kqep', 'pekeq')); // "kqeep"
console.log(customSortString('disqyr', 'iwyrysqrdj')); // "disqyyrrjw"
