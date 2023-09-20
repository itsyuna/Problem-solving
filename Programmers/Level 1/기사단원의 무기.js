function solution(number, limit, power) {
  if (number === 1) return 1;

  let answer = 0;

  // 약수 개수 구하기
  const countDivisor = num => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
        if (num / i !== i) count++;
      }
    }

    return count;
  };

  // 각 기사별 약수 개수 리스트 => 각 기사별 공격력 리스트
  const powerList = [1, 2];
  for (let i = 3; i <= number; i++) {
    const count = countDivisor(i);
    powerList.push(count);
  }

  // 협약에 의한 공격력 제한 수치와 비교 -> 제한 수치보다 클 경우 argument인 power 저장
  for (const p of powerList) {
    if (p <= limit) answer += p;
    else answer += power;
  }

  return answer;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
