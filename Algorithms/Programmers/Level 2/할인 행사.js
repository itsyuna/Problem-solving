function solution(want, number, discount) {
  for (const list of want) {
    if (!discount.includes(list)) return 0;
  }

  const totalItems = number.reduce((prev, cur) => prev + cur);

  let countDays = 0;
  const checkDiscount = list => {
    const shoppingList = new Map();

    for (let i = 0; i < want.length; i++) {
      shoppingList.set(want[i], number[i]);
    }

    for (const item of list) {
      if (shoppingList.has(item)) shoppingList.set(item, shoppingList.get(item) - 1);
    }

    for (const value of shoppingList.values()) {
      if (value !== 0) return countDays;
    }

    return ++countDays;
  };

  const endPoint = discount.length - totalItems;

  let checkDays;
  for (let i = 0; i < endPoint + 1; i++) {
    const splitDiscount = discount.slice(i, discount.length - endPoint + i);

    checkDays = checkDiscount(splitDiscount);
  }

  return checkDays;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
); // 3
console.log(
  solution(
    ['apple'],
    [10],
    ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana']
  )
); // 0
