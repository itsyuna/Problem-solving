const destCity = function (paths) {
  const map = new Map(paths);
  let start = paths[0][0];

  while (map.has(start)) {
    start = map.get(start);
  }

  return start;
};

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ])
); // "Sao Paulo"

console.log(
  destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ])
); // "A"
console.log(destCity([['A', 'Z']])); // "Z"
