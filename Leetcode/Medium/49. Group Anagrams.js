const groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];

  const sortStrs = {};

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!sortStrs[sortedStr]) sortStrs[sortedStr] = [];
    sortStrs[sortedStr].push(str);
  }

  return Object.values(sortStrs);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([''])); // [[""]]
console.log(groupAnagrams(['a'])); // [["a"]]
