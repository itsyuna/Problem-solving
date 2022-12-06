function solution(A, B) {
  const setA = new Set(A);
  const setB = new Set(B);

  if (setA.size === 1 && setB.size === 1 && [...setA][0] > [...setB][0]) return 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let score = 0;
  let j = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[j]) {
      score++;
      j++;
    }
  }

  return score;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
