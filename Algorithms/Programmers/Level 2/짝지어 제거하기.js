// 정확성 테스트 통과, 효율성 테스트 실패(시간 초과)
/*
function solution(s) {
  const makeArr = s.split('');

  for (let i = 0; i < makeArr.length - 1; ) {
    if (makeArr[i] === makeArr[i + 1]) {
      makeArr.splice(i, 2);
      i--;
    } else {
      i++;
    }

    if (makeArr.length === 0) return 1;
  }

  return 0;
}
*/

// stack으로 다시 풀기
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 현재 요소값과 arr의 끝 요소값이 같지 않으면,
    if (s[i] !== stack[stack.length - 1]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
