const findWinners = function (matches) {
  const answer = [];

  const loserList = new Map();
  const allPlayers = new Set();

  for (const [winner, loser] of matches) {
    // 모든 선수들 번호 목록
    allPlayers.add(winner).add(loser);

    // 한 번이라도 진 선수들 저장
    loserList.set(loser, (loserList.get(loser) || 0) + 1);
  }

  const allGamesWinners = [];
  const lostOneMatch = [];
  for (const player of allPlayers) {
    // 한 번도 안 진 선수들 목록
    if (!loserList.has(player)) allGamesWinners.push(player);
    // 딱 한 번만 진 선수들 목록
    else if (loserList.get(player) === 1) lostOneMatch.push(player);
  }

  answer[0] = allGamesWinners.sort((a, b) => a - b);
  answer[1] = lostOneMatch.sort((a, b) => a - b);

  return answer;
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
); // [[1,2,10],[4,5,7,8]]

console.log(
  findWinners([
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
  ])
); // [[1,2,5,6],[]]
