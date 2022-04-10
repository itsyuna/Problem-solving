function solution(sizes) {
  // 우선 모두 담을 수 있는 가장 큰 수는 fix 해두기
  const flatSizes = sizes.flat();
  const fixMax = Math.max(...flatSizes);
  const fixSize = [fixMax];
  let min = 0;

  // 중복 제거 및 오름차순 정렬
  const set = new Set(flatSizes.sort((a, b) => a - b));
  const ascendingOrder = [...set];

  // 최소값부터 순회하면서 기존 명함 배열의 min값과 비교하기
  for (let i = 0; i < ascendingOrder.length; i++) {
    for (const namecard of sizes) {
      min = Math.min(...namecard);

      // 전체 길이 중 최소값이 기존 명함의 각 배열의 min값보다 작다면, 사이즈 초과로 제작 불가
      if (ascendingOrder[i] < min) break;
    }
    // 제작 가능한 경우
    if (ascendingOrder[i] >= min) {
      fixSize.push(ascendingOrder[i]);
      break;
    }
  }

  return fixSize.reduce((prev, cur) => prev * cur);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
