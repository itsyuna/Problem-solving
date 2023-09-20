/* 
  -> 구현 생각
  이중 for문을 돌면서 각각 arr[i]와 arr[j]를 비교했을 때,
  arr[j] * 2한 요소값이 arr[i]와 같다면,
  true를 return 해주고, 아니라면 false를 리턴해준다.
*/

const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j] * 2) return true;
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([7, 1, 14, 11])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
