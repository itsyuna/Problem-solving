// Import stylesheets
import './style.css';

// Write Javascript code here!

/*
-> HTML5의 details 태그를 활용하면,
  팝오버 오픈을 위한 처리를 자바스크립트가 관여하지 않아도 되므로 
  코드가 훨씬 간결해진다.
*/

const items = document.querySelectorAll('details');
document.body.addEventListener('click', e => {
  if (e.target.nodeName !== 'P' && e.target.nodeName !== 'SUMMARY') {
    items.forEach(item => {
      item.removeAttribute('open');
    });
    return;
  }
  items.forEach(item => {
    if (item !== e.target.parentElement) {
      item.removeAttribute('open');
    }
  });
});
