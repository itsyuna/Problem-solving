function answer(chess) {
  let result = [];

  let item = [1, 1, 2, 2, 2, 8];
  let count = 0;

  for (let i = 0; i < chess.length; i++) {
    result[count++] = item[i] - chess[i];
  }

  return result;
}

console.log(answer([0, 1, 2, 2, 2, 7])); // [1, 0, 0, 0, 0, 1]
console.log(answer(2, 1, 2, 1, 2, 1)); // [-1, 0, 0, 1, 0, 7]
console.log(answer(0, 1, 1, 5, 3, 6)); // [1, 0, 1, -3, -1, 2]
