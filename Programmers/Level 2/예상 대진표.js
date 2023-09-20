function solution(n, a, b) {
  let count = 0;

  // 라운드의 같은 테이블이어야 붙게됨 (같은 테이블 => 2로 계속 나누었을 때 같은 숫자)
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    count++;
  }

  return count;
}

console.log(solution(8, 4, 7)); // 3

console.log(solution(16, 9, 12)); // 2
console.log(solution(8, 4, 5)); // 3
