function solution(p) {
  // 1단계
  if (p === '') return '';

  let answer = '';
  let count = 0;
  let u = '';
  let v = '';
  let checkCorrect = true;

  // 2단계 (u,v로 분리)
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      u += p[i];
      count += 1;
    } else {
      u += p[i];
      count -= 1;
    }

    if (count === 0) {
      v = p.substring(i + 1);
      break;
    } else if (count < 0) checkCorrect = false;
  }

  if (v === '' && checkCorrect) return p;

  // 3단계
  // 문자열 u가 '올바른 괄호 문자열'일 경우
  if (checkCorrect) {
    const answer = u + solution(v);
    return answer;
  }

  // 4단계
  // 문자열 u가 '올바른 괄호 문자열'이 아닐 경우
  answer += `(${solution(v)})`;

  u = u.substring(1, u.length - 1);

  for (let i = 0; i < u.length; i++) {
    u[i] === '(' ? (answer += ')') : (answer += '(');
  }

  return answer;
}

console.log(solution('(()())()')); // "(()())()"
console.log(solution(')(')); // "()"
console.log(solution('()))((()')); // "()(())()"
