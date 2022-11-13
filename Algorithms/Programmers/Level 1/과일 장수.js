function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => a - b);

  let box = [];
  while (score.length) {
    box.push(score.pop());

    if (box.length === m) {
      answer += box[box.length - 1] * m;
      box = [];
    }
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
