const decompressRLElist = function (nums) {
  let answer = [];

  for (let i = 0; i < nums.length - 1; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    const tempArr = new Array(freq).fill(val);
    answer = [...answer, ...tempArr];
  }
  return answer;
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]
console.log(decompressRLElist([1, 1, 2, 3])); // [1,3,3]
