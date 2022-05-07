function solution(n) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;

      if (sum > n) break;
      else if (sum === n) {
        count++;
        break;
      }
    }
  }

  // +1 : 자기 자신 (1가지만 나오는 경우)
  return count + 1;
}

console.log(solution(15)); // 4
