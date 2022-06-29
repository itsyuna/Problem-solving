const minAddToMakeValid = function (s) {
  const stack = [];

  for (const elem of s) {
    if (elem === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(elem);
  }

  return stack.length;
};

console.log(minAddToMakeValid('())')); // 1
console.log(minAddToMakeValid('(((')); // 3
console.log(minAddToMakeValid('()))((')); // 4
