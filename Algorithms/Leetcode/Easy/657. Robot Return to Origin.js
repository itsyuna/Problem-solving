const judgeCircle = function (moves) {
  if (moves.length % 2 !== 0) return false;

  let point = 0;
  const movePoint = {
    U: 1,
    D: -1,
    L: 2,
    R: -2,
  };

  for (const move of moves) {
    point += movePoint[move];
  }

  return point === 0;
};

console.log(judgeCircle('UD')); // true
console.log(judgeCircle('LL')); // false

console.log(judgeCircle('RRDD')); // false
console.log(
  judgeCircle('UDDUURLRLLRRUDUDLLRLURLRLRLUUDLULRULRLDDDUDDDDLRRDDRDRLRLURRLLRUDURULULRDRDLURLUDRRLRLDDLUUULUDUUUUL')
); // false
console.log(judgeCircle('LDD')); // false
