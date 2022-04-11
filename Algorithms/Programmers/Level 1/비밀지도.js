function solution(n, arr1, arr2) {
  // 자릿수 0으로 맞추기
  const padding = new Array(n).fill(0).join('');

  // 이진수 변환 함수
  function makeBinary(num) {
    const binaryMap = [];

    for (let i = 0; i < num.length; i++) {
      const binaryNum = num[i].toString(2);

      binaryMap.push((padding + binaryNum).slice(-padding.length));
    }

    return binaryMap;
  }

  const newArr1 = makeBinary(arr1);
  const newArr2 = makeBinary(arr2);

  const answer = [];

  for (let i = 0; i < newArr1.length; i++) {
    let code = '';

    for (let j = 0; j < n; j++) {
      +newArr1[i][j] + +newArr2[i][j] === 0 ? (code += ' ') : (code += '#');
    }

    answer.push(code);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
