// 스택 구현 (3)
// Stack() : 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}

// getBuufer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(); 객체 내 데이터 o/x
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// push(): 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop(): 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peek(): 가장 끝 데이터 반환
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};

// indexOf(): 매개변수로 넘어온 element 위치 확인
Stack.prototype.indexof = function (element, position = 0) {
  // return this.array.indexOf(element, position);
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return i;
  }
  return -1;
};

// includes(): 데이터 존재 여부 확인
Stack.prototype.includes = function (element, position = 0) {
  // return this.array.includes(element);
  // 기존 메서드에 한계를 극복하고,
  // position을 넣어서 position 위치부터 찾고싶을때는
  // 아래처럼 for문으로 해준다.
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return true;
  }
  return false;
};

let stack = new Stack([1, 2, 3]);

console.log(stack.indexof(1)); // 0
console.log(stack.indexof(2)); // 1
console.log(stack.indexof(1, 2)); // undefiend
// -> 1을 인덱스 2에서 부터 찾아라.
// = 3에서부터 찾는거니까 못찾음.
// 근데 우리가 원래 indexOf를 쓸 때 못찾으면 -1을 반환해줬으니까
// 위에서 없으면 return -1을 하라고 추가해줬다.
// 근데 위에서 return this.array.indexOf(element, position);
// for문 안하고 이렇게만 해주면, 없을 때 -1 값이 바로 나온다. -> array에서 똑같이 해준거라서.

console.log(stack.includes(1)); // true
console.log(stack.includes(5)); // false
// position을 준 후
console.log(stack.includes(1, 2)); // false
console.log(stack.includes(5));
