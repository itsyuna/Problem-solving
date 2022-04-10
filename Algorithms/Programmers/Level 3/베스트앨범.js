function solution(genres, plays) {
  const totalPlayM = new Map();
  const playListM = new Map();
  const favoritesP = [];
  const indexGenre = [];
  const result = [];

  for (let i = 0; i < plays.length; i++) {
    if (!totalPlayM.has(genres[i])) {
      totalPlayM.set(genres[i], plays[i]);
      // 넘버링 해주기
      playListM.set(`${i} ${genres[i]}`, plays[i]);
    } else {
      totalPlayM.set(genres[i], totalPlayM.get(genres[i]) + plays[i]);
      playListM.set(`${i} ${genres[i]}`, plays[i]);
    }
  }
  // Map(2) { 'classic' => 1450, 'pop' => 3100 }
  /*
    Map(5) {
      '0 classic' => 500,
      '1 pop' => 600,
      '2 classic' => 150,
      '3 classic' => 800,
      '4 pop' => 2500
    }
  */

  // totalPlayM -> value 값 기준 내림차순 정렬
  const sortMap = new Map([...totalPlayM.entries()].sort((a, b) => b[1] - a[1]));
  // Map(2) { 'pop' => 3100, 'classic' => 1450 }

  for (const key of sortMap.keys()) {
    favoritesP.push(key);
  }
  // [ 'pop', 'classic' ]

  // playListM -> value 값 기준 내림차순으로 정렬해주고, key 값만 추출
  const sortMap2 = new Map([...playListM.entries()].sort((a, b) => b[1] - a[1]));

  for (const key of sortMap2.keys()) {
    indexGenre.push(key.split(' '));
  }
  /*
    [
      [ '4', 'pop' ],
      [ '3', 'classic' ],
      [ '1', 'pop' ],
      [ '0', 'classic' ],
      [ '2', 'classic' ]
    ]
  */

  for (let i = 0; i < favoritesP.length; i++) {
    let count = 0;
    for (let j = 0; j < indexGenre.length; j++) {
      if (favoritesP[i] === indexGenre[j][1]) {
        // 현재 인덱스(넘버링)가 문자열 숫자로 되어있기 때문에, 숫자로 바꿔주기
        result.push(+indexGenre[j][0]);
        count++;
      }

      // 2가지 노래만 픽 할 수 있음
      if (count === 2) break;
    }
  }

  return result;
}

// * 노래 수록 기준 중 3번 기준인 '장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.'는,
// 아래와 같이 map의 특성을 이용하여 key값이 숫자로 시작하면, 자동으로 오름차순 정렬해준다.
/*
  [
    [ '1', 'pop', '2500' ],
    [ '4', 'pop', '2500' ],
    [ '6', 'pop', '2500' ],
    [ '9', 'pop', '2500' ],
    [ '10', 'pop', '2500' ],
    [ '3', 'classic', '800' ],
    [ '8', 'classic', '800' ],
    [ '0', 'classic', '500' ],
    [ '5', 'classic', '500' ],
    [ '2', 'classic', '150' ],
    [ '7', 'classic', '150' ]
  ]
*/

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]
