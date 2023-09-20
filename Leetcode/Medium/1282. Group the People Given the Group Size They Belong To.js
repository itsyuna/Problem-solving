const groupThePeople = function (groupSizes) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < groupSizes.length; i++) {
    const groupSize = groupSizes[i];
    map.set(groupSize, [...(map.get(groupSize) || []), i]);

    if (groupSize === map.get(groupSize).length) {
      answer.push(map.get(groupSize));
      map.delete(groupSize);
    }
  }

  return answer;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); // [[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([2, 1, 3, 3, 3, 2])); // [[1],[0,5],[2,3,4]]
