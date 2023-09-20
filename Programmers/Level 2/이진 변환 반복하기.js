function solution(s) {
  const answer = [0, 0];

  while (s.length > 1) {
    answer[0]++;
    const removeOne = s.replace(/0/g, '');
    answer[1] += s.length - removeOne.length;
    s = removeOne.length.toString(2);
  }

  return answer;
}

console.log(solution('110010101001')); // [3,8]
console.log(solution('01110')); // [3,3]
console.log(solution('1111111')); // [4,1]
