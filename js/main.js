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

