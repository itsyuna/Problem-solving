function solution(k, tangerine) {
  const set = new Set(tangerine);
  if (set.size === 1) return 1;

  const map = new Map();

  for (const sizeOfTangerine of tangerine) {
    map.set(sizeOfTangerine, (map.get(sizeOfTangerine) || 0) + 1);
  }

  const sortTangerine = [...map].sort((a, b) => b[1] - a[1]);

  const answer = [];
  let count = k;
  for (const tangerine of sortTangerine) {
    if (count <= 0) return answer.length;

    count -= tangerine[1];
    answer.push(tangerine[0]);
  }

  return answer.length;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
