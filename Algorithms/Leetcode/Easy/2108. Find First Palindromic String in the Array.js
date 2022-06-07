const firstPalindrome = function (words) {
  for (const word of words) {
    const reverseWord = word.split('').reverse().join('');

    if (word === reverseWord) return word;
  }

  return '';
};

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])); // "ada"
console.log(firstPalindrome(['notapalindrome', 'racecar'])); // "racecar"
console.log(firstPalindrome(['def', 'ghi'])); // ""
