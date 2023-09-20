const frequencySort = function (s) {
  const map = new Map();

  for (const elem of s) {
    if (!map.has(elem)) map.set(elem, 1);
    else map.set(elem, map.get(elem) + 1);
  }

  const mapArr = [];
  for (const [key, value] of map.entries()) {
    mapArr.push([key, value]);
  }

  mapArr.sort((a, b) => b[1] - a[1]);

  let answer = '';

  for (const [char, count] of mapArr) {
    answer += char.repeat(count);
  }

  return answer;
};

console.log(frequencySort('tree')); // "eert"
console.log(frequencySort('cccaaa')); // "aaaccc"
console.log(frequencySort('Aabb')); // "bbAa"
