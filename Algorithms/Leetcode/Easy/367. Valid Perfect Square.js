/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.
*/

const isPerfectSquare = function (num) {
  let min = 1;
  let max = num;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (num === mid * mid) return true;

    if (num > mid * mid) min = mid + 1;
    else max = mid - 1;
  }

  return false;
};

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
