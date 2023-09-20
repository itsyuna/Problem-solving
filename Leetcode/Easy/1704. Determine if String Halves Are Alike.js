const halvesAreAlike = function (s) {
  const letter = 'aeiouAEIOU';

  const firstHalf = s.slice(0, s.length / 2);
  const secondHalf = s.slice(s.length / 2, s.length);

  function checkVowel(halfLetter) {
    let count = 0;
    for (let i = 0; i < letter.length; i++) {
      for (let j = 0; j < halfLetter.length; j++) {
        if (letter[i] === halfLetter[j]) count++;
      }
    }

    return count;
  }

  const FirstCheckVowel = checkVowel(firstHalf);
  const SecondCheckVowel = checkVowel(secondHalf);

  if (FirstCheckVowel === SecondCheckVowel) return true;

  return false;
};

console.log(halvesAreAlike('book')); // true
console.log(halvesAreAlike('textbook')); // false
