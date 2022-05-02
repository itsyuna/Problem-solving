function solution(dartResult) {
  // S - 1제곱
  // D - 2제곱
  // T - 3제곱
  // * - 해당 점수 & 바로 전에 얻은 점수 2배
  // # - 해당 점수 마이너스(-)

  const sumNum = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      // 점수가 10일 경우
      if (dartResult[i + 1] === '0') {
        temp = 10;
        i++;
      } else temp = +dartResult[i];
    }

    if (dartResult[i] === 'S') {
      sumNum.push(temp);
    } else if (dartResult[i] === 'D') {
      sumNum.push(temp ** 2);
    } else if (dartResult[i] === 'T') {
      sumNum.push(temp ** 3);
    } else if (dartResult[i] === '*') {
      sumNum[sumNum.length - 2] = sumNum[sumNum.length - 2] * 2;
      sumNum[sumNum.length - 1] = sumNum[sumNum.length - 1] * 2;
    } else if (dartResult[i] === '#') {
      sumNum[sumNum.length - 1] = sumNum[sumNum.length - 1] * -1;
    }
  }

  return sumNum.reduce((prev, cur) => prev + cur, 0);
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
