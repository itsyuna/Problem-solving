function solution(nums) {
  const set = new Set(nums);
  const newArr = [...set];
  const pick = nums.length / 2;

  if (newArr.length < pick) {
    return newArr.length;
  }
  return pick;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
