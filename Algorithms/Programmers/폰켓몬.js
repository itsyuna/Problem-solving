function solution(nums) {
  let set = new Set(nums);
  let newArr = [...set];
  let pick = nums.length / 2;

  if (newArr.length < pick) {
    return newArr.length;
  } else {
    return pick;
  }
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
