// Stack
const minSwaps = function (s) {
  const stack = [];

  for (const bracket of s) {
    if (stack && bracket === ']') stack.pop();
    else if (bracket === '[') stack.push(bracket);
  }

  return Math.ceil(stack.length / 2);
};

// Counting
/*
const minSwaps = function (s) {
  let count = 0;
  let maxCount = 0;

  for (const bracket of s) {
    if (bracket === ']') {
      count++;
      maxCount = Math.max(maxCount, count);
    } else count--;
  }

  const answer = Math.ceil(maxCount / 2);
  return answer;
};
*/

console.log(minSwaps('][][')); // 1
console.log(minSwaps(']]][[[')); // 2
console.log(minSwaps('[]')); // 0
