const wateringPlants = function (plants, capacity) {
  let backNforthStep = 0;
  const originCapacity = capacity;

  for (let i = 0; i < plants.length; i++) {
    if (capacity >= plants[i]) {
      capacity -= plants[i];
    } else {
      backNforthStep += i * 2;
      capacity = originCapacity - plants[i];
    }
  }

  return backNforthStep + plants.length;
};

console.log(wateringPlants([2, 2, 3, 3], 5)); // 14
console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4)); // 30
console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)); // 49
