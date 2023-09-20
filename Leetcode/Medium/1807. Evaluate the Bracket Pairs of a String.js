const evaluate = function (s, knowledge) {
  const map = new Map(knowledge);

  const regExp = /(\()([a-z]+)(\))/g;

  return s.replace(regExp, (match, p1, p2, p3) => map.get(p2) || '?');
};

console.log(
  evaluate('(name)is(age)yearsold', [
    ['name', 'bob'],
    ['age', 'two'],
  ])
); // "bobistwoyearsold"
console.log(evaluate('hi(name)', [['a', 'b']])); // "hi?"
console.log(evaluate('(a)(a)(a)aaa', [['a', 'yes']])); // "yesyesyesaaa"
