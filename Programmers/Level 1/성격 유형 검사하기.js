function solution(survey, choices) {
  let answer = '';

  const types = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  // 지표별로 타입 분류
  const typeList = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  // 성격 유형 점수
  const point = [3, 2, 1, 0, 1, 2, 3];

  // 선택한 선택지에 따라서, 지표 타입과 점수 저장
  const map = new Map();
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) map.set(survey[i][0], (map.get(survey[i][0]) || 0) + point[choices[i] - 1]);
    else if (choices[i] > 4) map.set(survey[i][1], (map.get(survey[i][1]) || 0) + point[choices[i] - 1]);
  }

  // 선택한 타입이 없는 경우 0 저장
  for (const type of types) {
    if (!map.has(type)) map.set(type, 0);
  }

  // 각 지표에서 더 높은 점수를 받은 지표를 선택해서 저장
  for (const type of typeList) {
    if (map.get(type[0]) > map.get(type[1])) answer += type[0];
    else if (map.get(type[0]) < map.get(type[1])) answer += type[1];
    // 같은 점수인 경우, 사전 순으로 빠른 성격 유형 선택
    else {
      type.sort((a, b) => a - b);
      answer += type[0];
    }
  }

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3])); // "RCJA"
