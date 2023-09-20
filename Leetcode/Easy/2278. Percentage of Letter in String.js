const percentageLetter = function (s, letter) {
  let countLetter = 0;

  for (const char of s) {
    if (char === letter) countLetter++;
  }

  if (countLetter === 0) return 0;

  return Math.trunc((countLetter / s.length) * 100);
};

console.log(percentageLetter('foobar', 'o'));
console.log(percentageLetter('jjjj', 'k'));
