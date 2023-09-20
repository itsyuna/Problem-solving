function solution(n, m) {
  let answer = [];

  // 최대 공약수
  let gcd = 0;
  // 최소 공배수
  let lcm = 0;

  const num = n > m ? n : m;

  // 최대공약수 구하기
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  // 최소공배수 구하기
  lcm = (n * m) / gcd;
  answer = [gcd, lcm];

  return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
