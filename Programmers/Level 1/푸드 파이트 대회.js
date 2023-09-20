function solution(food) {
  // 음식 번호, 개수 저장
  const orderList = [];
  for (let i = 1; i < food.length; i++) {
    orderList.push([i, Math.trunc(food[i] / 2)]);
  }

  // 음식 개수만큼 번호 나열
  let player1 = '';
  for (const list of orderList) {
    const temp = '';
    if (list[1] > 0) player1 += temp.padStart(list[1], list[0]);
  }

  // 상대방 음식 배치 reverse
  const player2 = player1.split('').reverse().join('');

  // 중앙에 물 배치
  player1 += 0;

  return player1 + player2;
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"
