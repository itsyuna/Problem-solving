function solution(s) {
  let answer = '';
  const splitS = s.split(' ');

  answer = splitS.map(elem => elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase()).join(' ');

  return answer;
}

console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
console.log(solution('for the last week')); // "For The Last Week"
