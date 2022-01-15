const mostWordsFound = function (sentences) {
  let max = 0;

  for (const sentence of sentences) {
    const words = sentence.split(' ');
    max = Math.max(max, words.length);
  }

  return max;
};

console.log(mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'])); // 6
console.log(mostWordsFound(['please wait', 'continue to fight', 'continue to win'])); // 3
