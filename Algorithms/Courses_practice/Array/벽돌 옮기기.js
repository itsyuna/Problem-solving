function answer(blocks) {
  let average = blocks.reduce((prev, cur) => prev + cur, 0) / blocks.length;
  let answer = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > average) {
      answer += blocks[i] - average;
    }
  }

  return answer;
}

console.log(answer([5, 2, 4, 1, 7, 5])); // 5
console.log(answer([12, 8, 10, 11, 9, 5, 8])); // 6
console.log(answer([27, 14, 19, 11, 26, 25, 23, 15])); // 21
