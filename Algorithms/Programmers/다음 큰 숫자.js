function solution(n) {
  const binaryS = n.toString(2);
  const countFindOne = binaryS.match(/1/g).length;

  let nextNum = n + 1;

  while (n < nextNum) {
    const countNextNum = nextNum.toString(2).match(/1/g).length;

    if (countNextNum === countFindOne) {
      break;
    } else nextNum++;
  }

  return nextNum;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
