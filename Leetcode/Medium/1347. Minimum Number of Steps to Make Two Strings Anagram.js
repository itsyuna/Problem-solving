const minSteps = function (s, t) {
  let count = 0;
  const map = new Map();

  for (const letter of s) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  for (const letter of t) {
    if (map.has(letter) && map.get(letter) > 0) map.set(letter, map.get(letter) - 1);
    else count++;
  }

  return count;
};

console.log(minSteps('bab', 'aba')); // 1
console.log(minSteps('leetcode', 'practice')); // 5
console.log(minSteps('anagram', 'mangaar')); // 0

console.log(minSteps('gctcxyuluxjuxnsvmomavutrrfb', 'qijrjrhqqjxjtprybrzpyfyqtzf')); // 18
