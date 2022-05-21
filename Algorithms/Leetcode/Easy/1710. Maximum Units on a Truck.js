const maximumUnits = function (boxTypes, truckSize) {
  // boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]
  // numberOfUnitsPerBoxi 기준으로 내림차순 정렬
  const OrderNewBoxes = boxTypes.sort((a, b) => b[1] - a[1]);
  let answer = 0;

  for (let i = 0; i < OrderNewBoxes.length; i++) {
    if (OrderNewBoxes[i][0] <= truckSize) {
      truckSize -= OrderNewBoxes[i][0];
      answer += OrderNewBoxes[i][0] * OrderNewBoxes[i][1];
    } else {
      answer += truckSize * OrderNewBoxes[i][1];
      break;
    }
  }

  return answer;
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
