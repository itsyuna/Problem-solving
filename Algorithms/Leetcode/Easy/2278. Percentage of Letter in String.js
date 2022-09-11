const percentageLetter = function (s, letter) {
  let countLetter = 0;

  for (const char of s) {
    if (char === letter) countLetter++;
  }

  const answer = Math.trunc((countLetter / s.length) * 100);

  return countLetter !== 0 ? answer : 0;
};

console.log(percentageLetter('foobar', 'o'));
console.log(percentageLetter('jjjj', 'k'));
