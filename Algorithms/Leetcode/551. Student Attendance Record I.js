const checkRecord = function (s) {
  let countA = 0;
  let countL = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      countA++;
      if (countA === 2) return false;
    }

    if (s[i] === 'L' && s[i] === s[i + 1]) {
      countL++;
      if (countL === 3) return false;
    } else {
      countL = 1;
    }
  }

  return true;
};

console.log(checkRecord('PPALLP')); // true
console.log(checkRecord('PPALLL')); // false
