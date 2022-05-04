function solution(s) {
  // 중괄호 제거 후 숫자만 나열
  const newS = s.replace('{{', '').replace('}}', '').split('},{');

  const temp = [];
  for (const eachS of newS) {
    temp.push(eachS.split(',').map(elem => +elem));
  }

  // 배열 요소 길이 -> 오름차순 정렬
  temp.sort((a, b) => a.length - b.length);

  // 중복 제거
  const set = new Set(temp.flat());

  return [...set];
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
console.log(solution('{{20,111},{111}}')); // [111, 20]
console.log(solution('{{123}}')); // [123]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')); // [3, 2, 4, 1]
