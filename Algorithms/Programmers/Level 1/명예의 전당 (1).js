function solution(k, score) {
  const answer = [];

  const hallOfFame = score => {
    const hof = score.sort((a, b) => b - a).slice(0, k);

    return hof[hof.length - 1];
  };

  const list = [];
  for (const s of score) {
    list.push(s);

    if (list.length === 1) answer.push(s);
    else {
      const theLowestScore = hallOfFame(list);
      answer.push(theLowestScore);
    }
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
