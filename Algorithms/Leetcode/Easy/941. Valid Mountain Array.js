const validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let readyToDown = false;

  for (let i = 1; i < arr.length - 1; i++) {
    const curPosition = arr[i];
    const prevPosition = arr[i - 1];
    const nextPosition = arr[i + 1];

    if (curPosition > prevPosition && curPosition > nextPosition) readyToDown = true;
    else if (curPosition <= prevPosition && curPosition <= nextPosition) readyToDown = false;
  }

  return readyToDown;
};

console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
