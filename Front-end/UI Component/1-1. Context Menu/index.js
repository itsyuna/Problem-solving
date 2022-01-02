// Import stylesheets
import './style.css';

// Write Javascript code here!

// 마우스 클릭했을시에 context 내용이 뜨게 된다.
// (다른것도 클릭했을시에 똑같이 같이 떠있는 상태)
/* 
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', e => {
    item.classList.toggle('open');

    // 클릭했을시 다른 open 되어있던 context들은 없애준다.
    items.forEach(elem => {
      // 클릭한것 외에는 다른 'open'들을 지워준다.
      if (elem !== item) elem.classList.remove('open');
    });
  });
}); 
*/

/* 하지만 위의 코드의 문제점. 동작은 되지만 이벤트 감지가 너무 많다.
목록이 30개정도 되는데, 30개의 목록 아이템 하나하나마다
이벤트 리스너가 다 등록이 되어있다.
클릭이벤트만 30개가 넘게 등록되어있는 상태.

이벤트 감지 상태가 많다는것 = 성능저하로 이어질 수 있음

또 하나의 문제점.
현재 요구사항에는 없지만, 일반적으로 실무적으로 봤을때
목록이 이걸로 고정되어 있는것보다는, 목록이 끊임없이 변화하는 경우가 있을것이다.
예를들어, 아이템이 추가되어 있는경우, 이벤트가 등록되어 있지 않기 때문에,
아이템이 추가될때마다, 똑같이 addEventListener를 해줘야한다.
그래서 현재는 문제가 없을 수 있지만, 업무적으로 문제가 생길 수 있다. */

// 이벤트 리스너를 최소화 할 수 있는 방법
// 먼저 wrappr를 잡아준다.

const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

/* 이벤트 리스너의 등록은 가급적 최소화하는것이 바람직하다.
그러려면, 아래와 같이 이벤트의 버블링, 캡쳐링에 대해서 정확하게 이해해야 한다.
Wrapper에다가 click이벤트를 등록했는데 어떻게 안쪽의 것들이 동작을 할까?
-> click이벤트가 버블링이 일어나기 때문이다.
wrapper가 더 상위에 있는 DOM이고 item은 그보다 하위에 있는 DOM이기 때문에
하위에서 클릭 이벤트가 발생하면 그 이벤트를 상위로 전파를 한다. 
버블링에 의해서 상위에 전파했더니 wrapper 클래스로 전달이 됐고,
그 wrapper 클래스에는 클릭 이벤트에 대한 리스너가 등록이 되어 있기 때문에
이것이 실행이 된다.
실행은 됐지만, 실제 클릭이 발생한 대상 event target은
item으로 잡혀있기 때문에, targetELem이 item일 경우에 걸러지게 되는것이다.
그래서 아래 코드 부분이 동작가능한것. */

/*
wrapper.addEventListener('click', e => {
  const targetElem = e.target;
  e.stopPropagation();
  // e.preventDefault();   -> 학습하기. 굉장히 중요한 요소. 두가지의 용도가 다르다.
  // console.dir(e); target부분 : 현재 클릭이 일어난 대상 target을 보여준다
  if (!targetElem.classList.contains('item')) return;
  targetElem.classList.toggle('open');
  items.forEach(elem => {
    if (elem !== targetElem) elem.classList.remove('open');
  });
});
*/

// 외부를 클릭했을 때 컨텍스트창이 사라진다.
// = 목록만 아니면 동작이 되어야 함.

/*
클릭하면 context 창이 아예 뜨지 않는다.
이유는 위의 코드에 의해서 open이 됐다가,
지금 이 코드에 의해서 바로 close가 되고 있는것.
wrapper가 body보다 하위에 있는 요소이기 때문에 버블링에 의해서 먼저 실행이되고,
body도 버블링이 있기 때문에 다음에 바로 다시 실행이 되는것.
그러면 wrapper에서 버블링이 더이상 일어나지 않게끔 막아주면 된다.
-> 위 코드에 e.stopPropagation(); 추가 */

/*
document.body.addEventListener('click', e => {
  if (e.target.classList.contains('context')) return;
  items.forEach(elem => {
    elem.classList.remove('open');
  });
});
*/

/* 이벤트 리스너는 가급적 최소화 하는게 좋은데,
현재 클릭이벤트가 2개가 되어있다.
이것을 하나로 줄여보는 작업을 해보자.
버블링을 생각해보면 wrapper보다 body가 위에 있으니까
body에서 조건을 줘서 안에 wrapper를 주면 된다. */

document.body.addEventListener('click', e => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains('context')) return;
  if (targetClassList.contains('item')) {
    targetClassList.toggle('open');
    items.forEach(elem => {
      if (elem !== e.target) elem.classList.remove('open');
    });
    // 여기서는 동작을 하면 안되니까 return 처리를 해준다.
    return;
  }
  items.forEach(elem => {
    elem.classList.remove('open');
  });
});

/*
장점 : 리스너가 줄어들었다.
단점 : 조건문들이 많아질 수 밖에 없다. 클릭이벤트 하나에 대해서 조건을 계속
따져야한다. 이 조건문을 최적화 하는 방법을 고민할 필요가 있다.
그리고 또 한가지 문제는, body 전체에다가 addEventListener를 걸었기때문에,
이 페이지의 동작이 전부 종료되기 전까지는, 하나의 eventlistener에 전적으로
의존할 수 밖에 없다.
그래서 개별적인 리스너들에 대한 add, remove에 대한 관리가 될 수 없다.

실무에서, 앞에서 했던 wrapper와 body에 각각 따로 건 이벤트 리스너 방법과
지금 이 방법, 이렇게 2가지 중에서 어떤게 더 효율적일지 고민해서 사용하는게 좋다.
*/
