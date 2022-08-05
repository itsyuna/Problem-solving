const nextGreatestLetter = function (letters, target) {
  const targetNum = target.charCodeAt();
  const newArray = [];

  for (const letter of letters) {
    const changeToASCII = letter.charCodeAt();
    if (changeToASCII > targetNum) newArray.push(changeToASCII);
  }

  if (newArray.length === 0) {
    letters.sort((a, b) => a - b);
    return letters[0];
  }

  return newArray.length === 1 ? String.fromCharCode(newArray[0]) : String.fromCharCode(Math.min(...newArray));
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')); // "c"
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')); // "f"
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd')); // "f"

console.log(nextGreatestLetter(['c', 'f', 'j'], 'j')); // "c"
