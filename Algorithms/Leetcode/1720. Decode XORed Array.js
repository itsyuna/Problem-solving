// 1.
const decode = function (encoded, first) {
  const answer = [first];
  let current = first;

  encoded.forEach(ele => {
    current = ele ^ current;
    answer.push(current);
  });

  return answer;
};

// 2.
/*
const decode = function (encoded, first) {
  const answer = [first];
  let len = encoded.length;
  let i = 1;

  while (i <= len) {
    answer.push(answer[i - 1] ^ encoded[i - 1]);
    i++;
  }
  return answer;
};
*/

console.log(decode([1, 2, 3], 1)); // [1,0,2,1]
console.log(decode([6, 2, 7, 3], 4)); // [4,2,0,7,4]
