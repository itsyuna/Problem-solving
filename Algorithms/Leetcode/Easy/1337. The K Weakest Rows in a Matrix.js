const kWeakestRows = function (mat, k) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    const countSoldiers = mat[i].filter(num => num === 1);
    map.set(i, countSoldiers.length);
  }

  const orderRows = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

  for (const key of orderRows.keys()) {
    if (answer.length === k) return answer;

    answer.push(key);
  }

  return answer;
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
); // [2,0,3]
console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
); // [0,2]

console.log(
  kWeakestRows(
    [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    4
  )
); // [0,1,2,3]
