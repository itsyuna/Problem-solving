function solution(s) {
  let count = 0;
  let countLetter = 1;

  const arrS = s.split('');
  let nextLetter = 1;

  while (arrS.length) {
    const firstLetter = arrS[0];

    if (firstLetter !== arrS[nextLetter]) countLetter--;
    else countLetter++;

    nextLetter++;

    if (arrS.length === 1) return ++count;

    if (countLetter === 0) {
      count++;

      arrS.splice(firstLetter, nextLetter);
      countLetter = 1;
      nextLetter = 1;
    }
  }

  return count;
}

console.log(solution('banana', 3)); // 3
console.log(solution('abracadabra', 6)); // 6
console.log(solution('aaabbaccccabba', 3)); // 3
