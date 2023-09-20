const canPlaceFlowers = function (flowerbed, n) {
  let flowers = n;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        flowers--;
        i++;
      }
    } else i++;
  }

  if (flowers <= 0) return true;

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false

console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)); // true
