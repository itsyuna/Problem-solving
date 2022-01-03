// 스택 구현 (1)
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

let stack = new Stack([1, 2, 3]);

console.log(stack); // Stack { array: [ 1, 2, 3 ] }

// getBuffer()를 써서 stack에 대한 내용 복사하기.
let data = stack.getBuffer();
console.log(data); // [ 1, 2, 3 ]
console.log(data === stack.array); // false -> 값만 복사가 됨.

console.log(stack.isEmpty()); // false -> 현재 값이 있으니까

// 객체가 내부적으로 어떻게 생겼는지 확인
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
/* {
  constructor: {
    value: [Function: Stack],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getBuffer: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isEmpty: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
} 
*/
