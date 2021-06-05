let basketCounter = document.querySelector('.add-menu-basket-counter');
let basketPics = document.querySelectorAll('.basket-pic');
for (let basketPic of basketPics) {
  basketPic.addEventListener('click', function() {
    if (basketPic.classList.contains('basket-pic-active')) {
      basketPic.src = './img/header-basket-pic.svg';
      basketCounter.textContent--;
    } else {
      basketPic.src = './img/header-basket-pic-red.svg';
      basketCounter.textContent++;
    }
    basketPic.classList.toggle('basket-pic-active');
  })
}