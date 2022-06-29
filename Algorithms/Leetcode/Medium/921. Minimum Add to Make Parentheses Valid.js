// First code (Stack)
const minAddToMakeValid = function (s) {
  const stack = [];

  for (const elem of s) {
    if (elem === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(elem);
  }

  return stack.length;
};

// Second code
/* 
const minAddToMakeValid = function (s) {
  let countLeftP = 0;
  let countRightP = 0;

  for (const elem of s) {
    if (elem === '(') countLeftP++;
    else if (elem === ')' && countLeftP !== 0) countLeftP--;
    else countRightP++;
  }

  return countLeftP + countRightP;
};
*/

console.log(minAddToMakeValid('())')); // 1
console.log(minAddToMakeValid('(((')); // 3
console.log(minAddToMakeValid('()))((')); // 4
