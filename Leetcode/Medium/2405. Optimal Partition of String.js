const partitionString = function (s) {
  const checkSameLetter = new Set(s);

  if (checkSameLetter.size === 1) return s.length;

  let set = new Set();
  let count = 1;

  for (const letter of s) {
    if (!set.has(letter)) set.add(letter);
    else {
      count++;
      set = new Set(letter);
    }
  }

  return count;
};

console.log(partitionString('abacaba')); // 4
console.log(partitionString('ssssss')); // 6
