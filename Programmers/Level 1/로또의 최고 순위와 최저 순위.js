function solution(lottos, win_nums) {
  let answer = [];

  // 일치하는 번호
  const sameNum = win_nums.filter(elem => lottos.includes(elem)).length;

  // 알아볼 수 없는 번호 찾기 => 0 개수
  const findZero = lottos.filter(elem => elem === 0).length;

  // 최고 순위 (일치하는 개수 + 0 개수(맞을 수 있는 확률))
  const theBest = sameNum + findZero;

  // 최저 순위 = 일치하는 번호만 (sameNum)

  const maxRanking = theBest > 1 ? 7 - theBest : 6;
  const minRanking = sameNum > 1 ? 7 - sameNum : 6;

  answer = [maxRanking, minRanking];
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
