let mainHeader = document.querySelector('.main-header');
// let upButton = document.querySelector('up-button');

(function () {
  window.onscroll = () => {
    if (window.pageYOffset > 79) {
      mainHeader.classList.add('main-header_active');
    } else {
      mainHeader.classList.remove('main-header_active');
    }
  }
}());


let roubles = document.querySelectorAll('.js-rouble');

for(let rouble of roubles) {
  rouble.textContent = '\u20bd';
}

let filterFormHeaders = document.querySelectorAll('.filter-form__header');
let filterFormMarks = document.querySelectorAll('.filter-form__mark');
let filterFormSelects = document.querySelectorAll('.filter-form__select');

for(let i = 0; i < filterFormHeaders.length; i++) {
  filterFormHeaders[i].onclick = function() {
    filterFormSelects[i].classList.toggle('js-hidden');
    if(filterFormSelects[i].classList.contains('js-hidden')) {
      filterFormMarks[i].textContent = '+';
    } else {
      filterFormMarks[i].textContent = '-';
    }
  }
}

let mainHeaderMainMenu = document.querySelector('.main-header__main-menu');
let mainHeaderMenu = document.querySelector('.main-header__burger');
let burgerLineTop = document.querySelector('.burger-line-top');
let burgerLineMiddle = document.querySelector('.burger-line-middle');
let burgerLineBottom = document.querySelector('.burger-line-bottom');
let promo = document.querySelector('.promo');
let breadcrumbs = document.querySelector('.breadcrumbs');

mainHeaderMenu.onclick = function() {
  mainHeaderMainMenu.classList.toggle('main-header__main-menu_active');
  burgerLineTop.classList.toggle('burger-line-top_active');
  burgerLineMiddle.classList.toggle('burger-line-middle_active');
  burgerLineBottom.classList.toggle('burger-line-bottom_active');
  promo.classList.toggle('promo_active');
  breadcrumbs.classList.toggle('breadcrumbs_active');
  
}