const printVertically = function (s) {
  const splitS = s.split(' ');

  const longestWord = Math.max(...splitS.map(word => word.length));

  const answer = [...Array(longestWord)].map((_, i) =>
    splitS
      .map(word => word[i] || ' ')
      .join('')
      .trimEnd()
  );

  return answer;
};

console.log(printVertically('HOW ARE YOU')); // ["HAY","ORO","WEU"]
console.log(printVertically('TO BE OR NOT TO BE')); // ["TBONTB","OEROOE","   T"]
console.log(printVertically('CONTEST IS COMING')); // ["CIC","OSO","N M","T I","E N","S G","T"]
