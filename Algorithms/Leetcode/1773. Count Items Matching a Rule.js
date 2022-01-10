const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let ruleKeyNum;

  if (ruleKey === 'type') {
    ruleKeyNum = 0;
  } else if (ruleKey === 'color') {
    ruleKeyNum = 1;
  } else {
    ruleKeyNum = 2;
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleKeyNum] === ruleValue) count++;
  }
  return count;
};

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
); // 1

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'phone'],
      ['phone', 'gold', 'iphone'],
    ],
    'type',
    'phone'
  )
); // 2
