const removeOuterParentheses = function (s) {
  let answer = '';
  let count = 0;

  for (const parentheses of s) {
    if (parentheses === '(') count++;
    if (count !== 1) answer += parentheses;
    if (parentheses === ')') count--;
  }
  return answer;
};

console.log(removeOuterParentheses('(()())(())')); // "()()()"
console.log(removeOuterParentheses('(()())(())(()(()))')); // "()()()()(())"
console.log(removeOuterParentheses('()()')); // ""
