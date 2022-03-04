function solution(s) {
  const map = new Map();
  const answer = [];

  if (s[0] === ')') return false;

  for (const elem of s) {
    if (!map.has(elem)) {
      map.set(elem, 1);
    } else {
      map.set(elem, map.get(elem) + 1);
    }
  }

  for (const v of map.values()) {
    answer.push(v);
  }
  console.log(answer);

  const set = new Set(answer);

  return set.size === 1;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false
