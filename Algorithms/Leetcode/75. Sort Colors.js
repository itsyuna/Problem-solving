// sort() 사용하지 않고 구현해야 하는 문제

// 구현 생각
/*
  우선 왼쪽, 오른쪽, 현재 지점의 초기값을 설정해주고,
  끝지점인 오른쪽에 도달할때까지 while문을 돌려준다.
  그리고 nums[current]가 각각 0, 1, 2일때로 조건문을 주고
  temp 변수를 만들어서 값을 넣어주고 다시 그 temp를 각각 nums[]에 옮겨준다.
  + nums[current]가 1일때만 current++를 해준다.
  그리고나서 최종적으로 nums를 return 해준다.
*/
const sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;
  while (current <= right) {
    if (nums[current] === 0) {
      const temp = nums[left];
      nums[left++] = nums[current];
      nums[current++] = temp;
    } else if (nums[current] === 1) {
      current++;
    } else {
      const temp = nums[right];
      nums[right--] = nums[current];
      nums[current] = temp;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]
