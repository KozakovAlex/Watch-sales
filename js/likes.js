
let likeCounter = document.querySelector('.add-menu-like-counter');
let likePics = document.querySelectorAll('.like-pic');
for (let likePic of likePics) {
  likePic.addEventListener('click', function() {
    if (likePic.classList.contains('like-pic-active')) {
      likePic.src = './img/header-like-pic.svg';
      likeCounter.textContent--;
    } else {
      likePic.src = './img/header-like-pic-red.svg';
      likeCounter.textContent++;
    }
    likePic.classList.toggle('like-pic-active');
  })
}
