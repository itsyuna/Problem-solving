const interpret = function (command) {
  const answer = command.replace(/\(\)/g, 'o').replace(/\(/g, '').replace(/\)/g, '');
  return answer;
};

console.log(interpret('G()(al)')); // "Goal"
console.log(interpret('G()()()()(al)')); // "Gooooal"
console.log(interpret('(al)G(al)()()G')); // "alGalooG"
