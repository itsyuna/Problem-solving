function solution(X, Y) {
  const map = new Map();

  for (const num of X) map.set(num, (map.get(num) || 0) + 1);

  let bestie = '';
  for (const num of Y) {
    if (map.has(num) && map.get(num) > 0) {
      bestie += num;
      map.set(num, map.get(num) - 1);
    }
  }

  if (!bestie.length) return '-1';

  const bestieArr = bestie.split('');
  const noZero = bestieArr.filter(num => +num > 0);
  if (!noZero.length) return '0';

  bestieArr.sort((a, b) => b - a);

  return bestieArr.join('');
}

console.log(solution('100', '2345')); // "-1"
console.log(solution('100', '203045')); // "0"
console.log(solution('100', '123450')); // "10"
console.log(solution('12321', '42531')); // "321"
console.log(solution('5525', '1255')); // "552"
