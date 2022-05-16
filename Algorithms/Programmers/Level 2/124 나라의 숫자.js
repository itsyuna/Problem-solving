function solution(n) {
  // 3으로 나눴을 때, 나머지 1 -> 1, 2 -> 2, 나누어 떨어지면 4
  let answer = '';
  let num = n;

  while (num > 0) {
    if (num % 3 === 1) {
      answer = '1' + answer;
      num = Math.floor(num / 3);
    } else if (num % 3 === 2) {
      answer = '2' + answer;
      num = Math.floor(num / 3);
    } else if (num % 3 === 0) {
      answer = '4' + answer;
      num = num / 3 - 1;
    }
  }

  return answer;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11
