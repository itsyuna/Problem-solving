const lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false;

  let changeTen = 0;
  let changeFive = 0;

  for (const payment of bills) {
    if (payment === 5) changeFive++;

    if (payment === 10) {
      changeFive--;
      changeTen++;
    }

    if (payment === 20) {
      if (changeTen) {
        changeTen--;
        changeFive--;
      } else changeFive -= 3;
    }

    if (changeFive < 0) return false;
  }

  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
