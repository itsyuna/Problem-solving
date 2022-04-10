function solution(N, stages) {
  const answer = [];
  const map = new Map();
  let player = stages.length;

  for (let i = 1; i <= N; i++) {
    let failureRate = 0;
    const notClear = stages.filter(elem => i === elem).length;

    failureRate = notClear / player;
    map.set(i, failureRate);

    player -= notClear;
  }

  for (const [k, v] of map) {
    answer.push([v, k]);
  }
  answer.sort((a, b) => b[0] - a[0]);

  return answer.map(elem => elem[1]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
