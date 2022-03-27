function answer(mark) {
  let sumPoint = 0;
  let point = 0;

  for (let i = 0; i < mark.length; i++) {
    if (mark[i]) {
      sumPoint += ++point;
    } else {
      point = 0;
    }
  }

  return sumPoint;
}

console.log(answer([1, 0, 1, 1, 1, 0, 1, 1, 0, 0])); // 10
console.log(answer([1, 1, 0, 1, 1, 0, 1, 1, 1, 1])); // 16
console.log(answer([1, 1, 1, 1, 1, 0, 0, 1, 1, 0])); // 18
