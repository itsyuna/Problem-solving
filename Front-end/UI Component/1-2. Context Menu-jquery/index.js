// Import stylesheets
import './style.css';
import $ from 'jquery';

// Write JQuery code here!
const $wrapper = $('.wrapper');
const $items = $wrapper.find('.item'); // wrapper 안에 있는 item들만 잡아준다.

/*
$wrapper.on('click', '.item', function (e) {
  e.stopPropagation();
  $(this).toggleClass('open').siblings().removeClass('open');
});
*/

// 바깥쪽을 클릭했을 때 사라지게 해주는 부분 추가.
/*
$('body').on('click', e => {
  $items.removeClass('open');
});
*/

/*
jquery의 장점 :
하나에 대해서 toggleClass 명령어가 간단하게 한번에 이루어지고,
나머지 요소들 전체를 siblings라는것으로 한번에 잡아서,
나머지 전체에 대해서 forEach를 순회하지 않고도,
removeClass()로 한번에 할 수 있다.
items로 전체 잡혀있는것에 대해서 removeClass()로 한번에 할 수 있다. 
=> 코드적으로는 한 줄로 간단하지만, 내부적으로는 siblings로 잡혀있는
  모든 DOM 하나하나에 대해서 open 클래스를 지우는 반복작업을 똑같이 한다.
  (=내부적으로는 바닐라 자바스크립트로 코드를 구현한것과 같다.)
이렇게 간편한것이 장점!
*/

// 이벤트 리스너를 줄여서 하는 방법
$('body').on('click', e => {
  const item = $(e.target);
  // 클릭한 대상이 item에 해당하면,
  // 본인것만 하고 나머지를 지워준다.
  if (item.is('.item')) {
    item.toggleClass('oepn').siblings().removeClass('open');
    // 그 외에 경우에는, 지워준다.
  } else {
    $items.removeClass('open');
  }
});
