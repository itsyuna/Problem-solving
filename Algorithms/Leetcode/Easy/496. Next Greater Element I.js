const nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const answer = [];

  for (const num1 of nums1) {
    // num2에서 num1의 요소값의 index를 찾아주고,
    const findIdx = nums2.indexOf(num1);
    // 찾은 요소값의 인덱스부터 잘라서 새로운 배열을 만들어준다.
    const sliceNums2 = nums2.slice(findIdx);

    for (let i = 0; i < sliceNums2.length; i++) {
      // 자른 새 배열의 길이가 1이라면
      if (sliceNums2.length === 1) {
        // 바로 value 값으로 -1 저장
        map.set(num1, -1);
      }

      if (num1 < sliceNums2[i]) {
        map.set(num1, sliceNums2[i]);
        break;
      } else {
        map.set(num1, -1);
      }
    }
  }

  for (const v of map.values()) {
    answer.push(v);
  }

  return answer;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])); // [7,7,7,7,7]
