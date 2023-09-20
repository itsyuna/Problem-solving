const reconstructQueue = function (people) {
  if (people.length === 1) return people;

  people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));

  const answer = [];

  people.forEach(person => {
    answer.splice(person[1], 0, person);
  });

  return answer;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
); // [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
console.log(
  reconstructQueue([
    [6, 0],
    [5, 0],
    [4, 0],
    [3, 2],
    [2, 2],
    [1, 4],
  ])
); // [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
