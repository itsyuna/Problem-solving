function solution(n, words) {
  const answer = [0, 0];
  const set = new Set();

  for (let i = 1; i < words.length; i++) {
    set.add(words[0]);

    const stack = [];
    stack.push(words[i - 1][words[i - 1].length - 1]);

    const firstLetter = words[i][0];

    if (stack[0] !== firstLetter || set.has(words[i])) {
      answer[0] = (i % n) + 1;
      answer[1] = Math.floor(i / n + 1);
      break;
    }

    stack.pop();
    set.add(words[i]);
  }

  return answer;
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])); // [3,3]
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0,0]
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])); // [1,3]
