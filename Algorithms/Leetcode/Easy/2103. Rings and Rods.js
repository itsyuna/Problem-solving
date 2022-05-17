const countPoints = function (rings) {
  // R, G, B가 다 있어야 하므로 최소 나와야 하는 길이는 6
  if (rings.length < 6) return 0;

  const map = new Map();
  const arr = [];

  for (let i = 0; i < rings.length; i++) {
    arr.push(rings.substr(i, 2).split(''));
    i++;
  }

  for (const eachArr of arr) {
    for (let i = 0; i < eachArr.length; i++) {
      if (!map.has(eachArr[1])) {
        map.set(eachArr[1], eachArr[0]);
      } else {
        map.set(eachArr[1], map.get(eachArr[1]) + eachArr[0]);
      }
    }
  }

  const answer = [];

  for (const [key, v] of map.entries()) {
    const set = new Set(v);

    if ([...set].length === 3) {
      answer.push(key);
    }
  }

  return answer.length;
};

console.log(countPoints('B0B6G0R6R0R6G9')); // 1
console.log(countPoints('B0R0G0R9R0B0G0')); // 1
console.log(countPoints('G4')); // 0
