const findTheDifference = function (s, t) {
  if (s === '') return t;

  const sMap = new Map();

  for (const elem of s) {
    if (!sMap.has(elem)) sMap.set(elem, 1);
    else sMap.set(elem, sMap.get(elem) + 1);
  }

  for (const elem of t) {
    if (!sMap.has(elem)) return elem;

    if (sMap.has(elem) && sMap.get(elem) === 0) return elem;

    sMap.set(elem, sMap.get(elem) - 1);
  }
};

console.log(findTheDifference('abcd', 'abcde')); // 'e'
console.log(findTheDifference('', 'y')); // 'y'

console.log(findTheDifference('a', 'aa')); // 'a'
