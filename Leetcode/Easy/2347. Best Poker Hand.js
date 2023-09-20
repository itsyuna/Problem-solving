const bestHand = function (ranks, suits) {
  const suitMap = new Map();

  for (const suit of suits) {
    suitMap.set(suit, (suitMap.get(suit) || 0) + 1);

    if (suitMap.get(suit) === 5) return 'Flush';
  }

  const rankMap = new Map();

  for (const rank of ranks) {
    rankMap.set(rank, (rankMap.get(rank) || 0) + 1);

    if (rankMap.get(rank) === 3) return 'Three of a Kind';
  }

  for (const value of rankMap.values()) {
    if (value === 2) return 'Pair';
  }

  return 'High Card';
};

console.log(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])); // "Flush"
console.log(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])); // "Three of a Kind"
console.log(bestHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])); // "Pair"
