function solution(n, lost, reserve) {
  // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 경우 -> 양쪽 배열에서 제거
  let losted = [...lost].filter((elem) => !reserve.includes(elem));
  let reserved = [...reserve].filter((elem) => !lost.includes(elem));

  // 현재 시점 체육 수업을 들을 수 있는 학생
  // -> 전체 학생 수 - 체육복을 도난당한 학생 수
  fixedStudents = n - losted.length;

  let count = 0;

  // losted 배열은 작은 수부터 순회할 수 있게 오름차순 정렬
  // Ex) solution(5, [4, 2], [3, 5])); // return -> 5
  let newLost = losted.sort((a, b) => a - b);

  for (let eachLost of newLost) {
    if (reserved.includes(eachLost - 1)) {
      let idx = reserved.indexOf(eachLost - 1);
      reserved.splice(idx, 1);
      count++;
    } else if (reserved.includes(eachLost + 1)) {
      let idx = reserved.indexOf(eachLost + 1);
      reserved.splice(idx, 1);
      count++;
    }
  }

  return fixedStudents + count;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
