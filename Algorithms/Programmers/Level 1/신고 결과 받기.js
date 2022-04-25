function solution(id_list, report, k) {
  // map -> 신고 당한 유저 아이디 : 신고한 유저 아이디
  const result = [];

  const map = new Map();

  const set = new Set(report);
  const newReport = [...set];

  for (const eachReport of newReport) {
    const separate = eachReport.split(' ');

    if (!map.has(separate[1])) {
      map.set(separate[1], separate[0]);
    } else {
      map.set(separate[1], map.get(separate[1]) + `,${separate[0]}`);
    }
  }

  const mailingList = [];
  for (const v of map.values()) {
    const arrValue = v.split(',');

    // k 이상일 때만, mailingList에 담아준다.
    if (arrValue.length >= k) {
      mailingList.push(arrValue);
    }
  }

  const newMailingList = mailingList.flat();
  for (const idList of id_list) {
    const count = newMailingList.filter(elem => elem === idList).length;
    result.push(count);
  }

  return result;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2, 1, 1, 0];

console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)); // [0, 0]
