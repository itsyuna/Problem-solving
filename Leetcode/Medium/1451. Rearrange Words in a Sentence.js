const arrangeWords = function (text) {
  const splitText = text.split(' ');
  const answer = splitText
    .sort((a, b) => a.length - b.length)
    .join(' ')
    .toLowerCase();

  return answer.replace(/^[a-z]/, char => char.toUpperCase());
};

console.log(arrangeWords('Leetcode is cool')); // "Is cool leetcode"
console.log(arrangeWords('Keep calm and code on')); // "On and keep calm code"
console.log(arrangeWords('To be or not to be')); // "To be or to be not"
