function solution(n) {
  let change = 1000 - n;
  let coin = [500, 100, 50, 10, 5, 1];
  let count = 0;
   
    for (let i = 0; i < coin.length; i++) {
      if (change === 0) break;

      if (change > coin[i]) {
        count += Math.floor(change / coin[i]);
        change %= coin[i];
      } 
    }

  return count;
}

console.log(solution(380)); // 4
console.log(solution(1)); // 15
