/*
offsetTop, scrollTop, clientHeight의 상관관계 이해, 
scrollIntoView의 사용법 익히기.
*/

import './style.css';

const navElem = document.querySelector('#nav');
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector('#contents');
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map(elem => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2, ofs + clh / 2];
});

window.addEventListener('scroll', e => {
  const { scrollTop } = e.target.scrollingElement;
  // do something
  const targetIndex = offsetTops.findIndex(([from, to]) => scrollTop >= from && scrollTop < to);
  Array.from(navElem.children).forEach((c, i) => {
    if (i !== targetIndex) c.classList.remove('on');
    else c.classList.add('on');
  });
});

navElem.addEventListener('click', e => {
  const targetElem = e.target;
  if (targetElem.tagName === 'BUTTON') {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
});
