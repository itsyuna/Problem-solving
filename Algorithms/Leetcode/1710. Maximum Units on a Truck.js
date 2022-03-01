const maximumUnits = function (boxTypes, trucjSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let i = 0;
  let j = 0;
  let units = 0;

  while (i < boxTypes.length) {
    if (j + boxTypes[i][0] < trucjSize) {
      j += boxTypes[i][0];
      units += boxTypes[i][0] * boxTypes[i][1];
      i++;
    } else {
      units += (trucjSize - j) * boxTypes[i][1];
      break;
    }
  }
  return units;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
); // 8
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
); // 91
