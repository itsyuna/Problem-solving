function searchMaze(n, m, arr) {
  // 상, 하, 좌, 우 방향 설정
  const dirX = [-1, 0, 1, 0];
  const dirY = [0, 1, 0, -1];

  const queue = [];
  queue.push({ x: 0, y: 0 });

  while (queue.length > 0) {
    const elem = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = elem.x + dirX[i];
      const nextY = elem.y + dirY[i];

      // 범위 설정
      if (nextX > 0 && nextY > 0 && nextX <= n && nextY <= m && arr[nextX][nextY] === 1) {
        arr[nextX][nextY] = arr[elem.x][elem.y] + 1;
        queue.push({ x: nextX, y: nextY });
      }
    }
  }
  return arr[n - 1][m - 1];
}
