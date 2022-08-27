const slowestKey = function (releaseTimes, keysPressed) {
  let longestDuration = releaseTimes[0];
  let answer = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];
    if (longestDuration < duration) {
      longestDuration = duration;
      answer = keysPressed[i];
    } else if (longestDuration === duration) {
      answer = answer.charCodeAt(0) < keysPressed.charCodeAt(i) ? keysPressed[i] : answer;
    }
  }

  return answer;
};

console.log(slowestKey([9, 29, 49, 50], 'cbcd')); // "c"
console.log(slowestKey([12, 23, 36, 46, 62], 'spuda')); // "a"
