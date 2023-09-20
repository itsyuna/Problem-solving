function solution(topping) {
  let answer = 0;

  const getOB = new Map();
  for (const t of topping) {
    getOB.set(t, (getOB.get(t) || 0) + 1);
  }

  const getYB = new Set();

  for (let i = 0; i < topping.length - 1; i++) {
    getYB.add(topping[i]);
    getOB.set(topping[i], getOB.get(topping[i]) - 1);

    if (getOB.get(topping[i]) === 0) getOB.delete(topping[i]);

    if (getOB.size === getYB.size) answer++;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
