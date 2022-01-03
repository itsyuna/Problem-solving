// 스택 구현 (2)
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

let stack = new Stack([1, 2]);
console.log(stack); // Stack { array: [ 1, 2 ] }
stack.push(3);
console.log(stack); // Stack { array: [ 1, 2, 3 ] }

// console.log(stack.pop()); // 3
// console.log(stack); // Stack { array: [ 1, 2 ] }

console.log(stack.pop()); // 3
console.log(stack.pop()); // 3
console.log(stack.peek()); // 1
console.log(stack.size()); // 1
