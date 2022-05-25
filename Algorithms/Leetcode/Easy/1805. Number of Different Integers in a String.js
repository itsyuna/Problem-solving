const numDifferentIntegers = function (word) {
  const rexExp = /[a-z]/g;
  const arr = [];

  const replaceWord = word.replace(rexExp, ' ').split(' ');

  for (const w of replaceWord) {
    if (w !== '') arr.push(w);
  }

  const set = new Set(arr.map(elem => elem.replace(/^0+/, '')));
  return set.size;
};

console.log(numDifferentIntegers('a123bc34d8ef34')); // 3
console.log(numDifferentIntegers('leet1234code234')); // 2
console.log(numDifferentIntegers('a1b01c001')); // 1
