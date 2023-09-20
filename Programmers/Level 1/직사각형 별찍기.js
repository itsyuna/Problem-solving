process.stdin.setEncoding('utf8');
// 문자열 형태로 데이터가 들어옴
process.stdin.on('data', data => {
  // [5], [3] 이런식으로 split
  const n = data.split(' ');
  // 문자 -> 숫자형태로 바꿔준다.
  // a = 5, b = 3
  const a = Number(n[0]);
  const b = Number(n[1]);

  let answer = '';

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      answer += '*';
    }
    answer += '\n';
  }

  console.log(answer);
});
