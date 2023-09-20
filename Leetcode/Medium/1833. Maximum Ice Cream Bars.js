const maxIceCream = function (costs, coins) {
  let count = 0;
  let change = coins;

  costs.sort((a, b) => a - b);

  for (const cost of costs) {
    if (cost <= change) {
      change -= cost;
      count++;
    } else break;
  }

  return count;
};

console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // 4
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5)); // 0
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20)); // 6
