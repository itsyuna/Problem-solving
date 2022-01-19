const smallerNumbersThanCurrent = function (nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
};

// HashMap
/*
var smallerNumbersThanCurrent = function (nums) {
  let desSort = [...nums].sort((num1, num2) => num2 - num1);
  let obj = {};

  for (let i = 0; i < desSort.length; i++) {
    obj[desSort[i]] = desSort.length - 1 - i;
  }
  
  return nums.map(num => obj[num]);
};
*/

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
