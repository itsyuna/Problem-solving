function solution(ingredient) {
  let countHamburger = 0;
  const makeHamburger = '1231';
  const stack = [];

  for (const i of ingredient) {
    stack.push(i);

    if (stack.length > 3) {
      const ingredientList = stack.slice(stack.length - 4, stack.length);

      if (ingredientList.join('') === makeHamburger) {
        stack.splice(stack.length - 4, 4);
        countHamburger++;
      }
    }
  }

  return countHamburger;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
