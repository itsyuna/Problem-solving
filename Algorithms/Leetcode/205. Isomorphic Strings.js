/* 
-> 구현 생각
우선 s와 t의 길이가 같지 않다면 바로 return false를 해주고,

Map()을 만들어서 for문을 순회하면서
map.has(s[i])와 map.get(s[i])가 t[i]와 같지 않다면,
false를 return해주고,
그게 아니라면 map.set(s[i], t[i])을 해주고
return true를 해준다.
*/

const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  if (new Set(s).size !== new Set(t).size) return false;
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
      return false;
    }
    map.set(s[i], t[i]);
  }
  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
