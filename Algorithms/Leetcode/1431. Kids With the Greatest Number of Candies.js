const kidsWithCandies = function (candies, extraCandies) {
  const sum = [];
  const answer = [];
  for (let i = 0; i < candies.length; i++) {
    sum.push(candies[i] + extraCandies);

    if (sum[i] < Math.max(...candies)) answer.push(false);
    else answer.push(true);
  }
  return answer;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]
