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

let picturesSrc = [
'./img/card/card-sm-watch1.png',
'./img/card/card-sm-watch2.png',
'./img/card/card-sm-watch3.png',
'./img/card/card-sm-watch4.png'
]

let mainCardPic = document.querySelector('.card__img-lg');
let cardsPic = document.querySelectorAll('.card__img-sm');
let cardArrowLeft = document.querySelector('.card__img-arrow-left');
let cardArrowRight = document.querySelector('.card__img-arrow-right');

let currentCardPic = cardsPic[0];
let currentIndex = 0;

currentCardPic.classList.add('card__img-sm_selected');

for (let i = 0; i < cardsPic.length; i++) {
  cardsPic[i].addEventListener('click', function() {
    mainCardPic.src = picturesSrc[i];
    currentCardPic.classList.remove('card__img-sm_selected');
    currentCardPic = cardsPic[i];
    currentCardPic.classList.add('card__img-sm_selected');
    currentIndex = i;
  });
}

cardArrowRight.addEventListener('click', function() {
  if (currentIndex == cardsPic.length - 1) {
    mainCardPic.src = picturesSrc[0];
    currentCardPic.classList.remove('card__img-sm_selected');
    currentCardPic = cardsPic[0];
    currentCardPic.classList.add('card__img-sm_selected');
    currentIndex = 0;
  } else {
    mainCardPic.src = picturesSrc[currentIndex + 1];
    currentCardPic.classList.remove('card__img-sm_selected');
    currentCardPic = cardsPic[currentIndex + 1];
    currentCardPic.classList.add('card__img-sm_selected');
    currentIndex += 1;
  }
})

cardArrowLeft.addEventListener('click', function() {
  if (currentIndex == 0) {
    mainCardPic.src = picturesSrc[cardsPic.length - 1];
    currentCardPic.classList.remove('card__img-sm_selected');
    currentCardPic = cardsPic[cardsPic.length - 1];
    currentCardPic.classList.add('card__img-sm_selected');
    currentIndex = cardsPic.length - 1;
  } else {
    mainCardPic.src = picturesSrc[currentIndex - 1];
    currentCardPic.classList.remove('card__img-sm_selected');
    currentCardPic = cardsPic[currentIndex - 1];
    currentCardPic.classList.add('card__img-sm_selected');
    currentIndex -= 1;
  }
})

