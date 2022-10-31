const maxNumberOfBalloons = function (text) {
  const wordBalloon = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (const char of text) {
    if (char in wordBalloon) wordBalloon[char]++;
  }

  const answer = [wordBalloon.b, wordBalloon.a, wordBalloon.l / 2, wordBalloon.o / 2, wordBalloon.n];

  return Math.floor(Math.min(...answer));
};

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0

console.log(maxNumberOfBalloons('"balon"')); // 0
