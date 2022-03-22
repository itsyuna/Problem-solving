// 1.
function answer(dwarf) {
  let result = [];
  let clue = 100;
  let idxNum1;
  let idxNum2;

  let sum = dwarf.reduce((pre, cur) => pre + cur, 0);

  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (dwarf[i] + dwarf[j] === sum - clue) {
        idxNum1 = i;
        idxNum2 = j;
        break;
      }
    }
  }

  for (let i = 0; i < dwarf.length; i++) {
    if (i !== idxNum1 && i !== idxNum2) {
      result.push(dwarf[i]);
    }
  }

  return result;
}

// 2.
/*
function answer(dwarf) {
  let result = [];

  // calc sum
  let sum = 0;
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100;

  // search dwarf
  let faker = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum === dwarf[i] + dwarf[j]) {
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }

    if (faker.length !== 0) break;
  }

  // put result
  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] !== i && faker[1] !== i) {
      result[count++] = dwarf[i];
    }
  }

  return result;
}
*/

console.log(answer([1, 5, 6, 7, 10, 12, 19, 29, 33])); // [1, 5, 6, 7, 19, 29, 33]
console.log(answer([25, 23, 11, 2, 18, 3, 28, 6, 37])); // [23, 11, 2, 18, 3, 6, 37]
console.log(answer([3, 37, 5, 36, 6, 22, 19, 2, 28])); // [3, 37, 5, 6, 19, 2, 28]
