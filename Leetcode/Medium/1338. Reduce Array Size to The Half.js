const minSetSize = function (arr) {
  let answer = 0;
  let minimumTargetSize = arr.length / 2;

  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const countValue = [...map.values()];
  countValue.sort((a, b) => b - a);

  for (const num of countValue) {
    minimumTargetSize -= num;
    answer++;

    if (minimumTargetSize <= 0) return answer;
  }
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2
console.log(minSetSize([7, 7, 7, 7, 7, 7])); // 1

console.log(minSetSize([9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19])); // 5
