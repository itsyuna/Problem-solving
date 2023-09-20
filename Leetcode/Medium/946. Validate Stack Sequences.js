const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let pushIdx = 0;
  let popIdx = 0;

  while (pushIdx <= pushed.length && popIdx <= popped.length) {
    if (stack[stack.length - 1] === popped[popIdx]) {
      stack.pop();
      popIdx++;
    } else stack.push(pushed[pushIdx++]);
  }

  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // false
