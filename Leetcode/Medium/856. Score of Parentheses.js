const scoreOfParentheses = function (s) {
  const stack = [0];

  for (const bracket of s) {
    if (bracket === '(') stack.push(0);
    else {
      const recentBracket = stack.pop();
      stack[stack.length - 1] += 2 * recentBracket || 1;
    }
  }

  return stack.pop();
};

console.log(scoreOfParentheses('()')); // 1
console.log(scoreOfParentheses('(())')); // 2
console.log(scoreOfParentheses('()()')); // 2

console.log(scoreOfParentheses('(()(()))')); // 6
