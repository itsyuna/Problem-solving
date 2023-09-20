function solution(board, moves) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    // 배열 인덱스 0부터 시작
    const idx = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][idx] !== 0) {
        // 바구니에 같은 인형이 있을 경우
        if (stack[stack.length - 1] === board[j][idx]) {
          // 떠트려질 인형 개수
          result += 2;
          // 터뜨리기
          stack.pop();
        } else {
          stack.push(board[j][idx]);
        }

        // 뽑은 인형은 0으로 처리
        board[j][idx] = 0;
        break;
      }
    }
  }

  return result;
}

// 뽑아서 바구니에 담겨질 인형 번호 (stack)
/* 4
   2
   3
   1
   1
   3
   4
*/

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
