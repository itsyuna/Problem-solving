const removeOccurrences = function (s, part) {
  const regExp = new RegExp(part);

  let removedSubsPart = s.replace(regExp, '');

  while (regExp.test(removedSubsPart) === true) {
    removedSubsPart = removedSubsPart.replace(regExp, '');
  }

  return removedSubsPart;
};

console.log(removeOccurrences('daabcbaabcbc', 'abc')); // "dab"
console.log(removeOccurrences('axxxxyyyyb', 'xy')); // "ab"
