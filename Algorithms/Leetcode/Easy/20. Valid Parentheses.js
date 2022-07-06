const isValid = function (s) {
  if (s.length === 1) return false;

  const stack = [];
  const setValidS = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const elem of s) {
    if (elem in setValidS) stack.push(elem);
    else {
      const closeBracket = stack.pop();
      if (setValidS[closeBracket] !== elem) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
