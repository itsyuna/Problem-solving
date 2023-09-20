const rotateString = function (s, goal) {
  const splitS = s.split('');

  for (let i = 1; i < splitS.length; i++) {
    splitS.push(splitS[0]);
    splitS.shift();

    if (splitS.join('') === goal) return true;
  }

  return false;
};

console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false
