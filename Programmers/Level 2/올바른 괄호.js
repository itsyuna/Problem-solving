function solution(s) {
  if (s[0] === ')') return false;

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') count++;
    else count--;

    if (count < 0) return false;
  }

  if (count === 0) return true;

  return false;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false

console.log(solution('())()(()')); // false
