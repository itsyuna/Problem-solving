const replaceDigits = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) answer += String.fromCharCode(s[i - 1].charCodeAt() + +s[i]);
    else answer += s[i];
  }

  return answer;
};

console.log(replaceDigits('a1c1e1')); // "abcdef"
console.log(replaceDigits('a1b2c3d4e')); // "abbdcfdhe"
