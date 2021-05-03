let mainHeader = document.querySelector('.main-header');
let upButton = document.querySelector('.up-button');

(function () {
  window.onscroll = () => {
    if (window.pageYOffset > 79) {
      // mainHeader.classList.add('main-header_active');
      upButton.classList.add('up-button_shown');
    } else {
      // mainHeader.classList.remove('main-header_active');
      upButton.classList.remove('up-button_shown');
    }
  }
}());

upButton.onclick = function() {
  window.scrollTo(0, 0);
}

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
let mainMenuItemLinks = document.querySelectorAll('.main-menu-item-link');
let mainHeaderMenu = document.querySelector('.main-header__burger');
let burgerLineTop = document.querySelector('.burger-line-top');
let burgerLineMiddle = document.querySelector('.burger-line-middle');
let burgerLineBottom = document.querySelector('.burger-line-bottom');

mainHeaderMenu.onclick = function() {
  mainHeaderMainMenu.classList.toggle('main-header__main-menu_active');
  burgerLineTop.classList.toggle('burger-line-top_active');
  burgerLineMiddle.classList.toggle('burger-line-middle_active');
  burgerLineBottom.classList.toggle('burger-line-bottom_active');
  for (let mainMenuItemLink of mainMenuItemLinks) {
    mainMenuItemLink.classList.toggle('main-menu-item-link_active');
  }
}

let catalogButtonFilter = document.querySelector('.catalog__button-filter');
let catalogCardsFilter = document.querySelector('.catalog-cards__filter');
catalogButtonFilter.onclick = function() {
  catalogCardsFilter.classList.toggle('catalog-cards__filter_active');
}



let textSubtitleDescr = document.querySelector('.text-subtitle-descr');
let textSubtitleTechs = document.querySelector('.text-subtitle-techs');
let textDescr = document.querySelector('.text-descr');
let textTechs = document.querySelector('.text-techs');

textSubtitleTechs.onclick = function() {
  textSubtitleTechs.classList.add('text-subtitle-active');
  textSubtitleDescr.classList.remove('text-subtitle-active');
  textDescr.classList.toggle('js-hidden');
  textTechs.classList.toggle('js-hidden');
  // textDescr.style.display = 'none';
  // textTechs.style.display = 'block';
}

textSubtitleDescr.onclick = function() {
  textSubtitleTechs.classList.remove('text-subtitle-active');
  textSubtitleDescr.classList.add('text-subtitle-active');
  textDescr.classList.toggle('js-hidden');
  textTechs.classList.toggle('js-hidden');
  // textTechs.style.display = 'none';
  // textDescr.style.display = 'block';
}

