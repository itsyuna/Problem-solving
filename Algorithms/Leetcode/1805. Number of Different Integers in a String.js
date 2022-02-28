const numDifferentIntegers = function (word) {
  const answer = [];
  const regExp = /[a-z]|0/g;

  // 숫자가 아닌 부분은 공백 처리
  const onlyNumWord = word.replace(regExp, ' ');

  const newArr = onlyNumWord.split(' ');

  for (let i = 0; i < newArr.length; i++) {
    // 빈 문자열이 아닌 부분 = 숫자 요소값들
    if (newArr[i] !== '') {
      answer.push(newArr[i]);
    }
  }
  const set = new Set(answer);

  return set.size;
};

console.log(numDifferentIntegers('a123bc34d8ef34')); // 3
console.log(numDifferentIntegers('leet1234code234')); // 2
console.log(numDifferentIntegers('a1b01c001')); // 1
