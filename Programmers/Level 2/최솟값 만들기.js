function solution(A, B) {
  const ascendingOrder = A.sort((a, b) => a - b);
  const descendingOrder = B.sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < ascendingOrder.length; i++) {
    count += ascendingOrder[i] * descendingOrder[i];
  }

  return count;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
