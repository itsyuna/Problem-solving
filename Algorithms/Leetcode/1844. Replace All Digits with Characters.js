const replaceDigits = function (s) {
  for (let i = 1; i < s.length; i += 2) {
    const str = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
    s = s.replace(s[i], str);
  }
  return s;
};

console.log(replaceDigits('a1c1e1')); // "abcdef"
console.log(replaceDigits('a1b2c3d4e')); // "abbdcfdhe"
