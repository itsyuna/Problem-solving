// 135ms
const finalValueAfterOperations = function (operations) {
  let sum = 0;

  const hash = {
    '--X': -1,
    'X--': -1,
    '++X': 1,
    'X++': 1,
  };

  for (const key in hash) {
    if (hash.hasOwnProperty.call(hash, key)) {
      for (let i = 0; i < operations.length; i++) {
        if (key === operations[i]) {
          sum += hash[key];
        }
      }
    }
  }
  return sum;
};

// 60ms
/*
var finalValueAfterOperations = function (operations) {
  let count = 0;

  for (var i = 0; i < operations.length; i++) {
    if (operations[i] == '++X' || operations[i] == 'X++') {
      count++;
    } else if (operations[i] == '--X' || operations[i] == 'X--') {
      count--;
    }
  }
  return count;
};
*/

console.log(finalValueAfterOperations(['--X', 'X++', 'X++'])); // 1
console.log(finalValueAfterOperations(['++X', '++X', 'X++'])); // 3
console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--'])); // 0
