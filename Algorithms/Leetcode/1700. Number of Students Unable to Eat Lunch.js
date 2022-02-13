const countStudents = function (students, sandwiches) {
  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      students.push(students.shift());
    }

    // students의 숫자가 다 같고, sandwiches[0]과 다를때
    // Ex) 1 1 1 : 0 1 1  -> 3명이 먹지 못함
    // 1 : 0 -> 1명
    if (students.every(v => v === students[0]) === true && students[0] !== sandwiches[0]) return students.length;
  }

  return 0;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
