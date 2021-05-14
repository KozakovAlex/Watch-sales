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

// let newCardsPic = cardsPic.splice(0, 2);
// console.log(cardsPic);

for (let i = 0; i < cardsPic.length; i++) {
  cardsPic[i].addEventListener('click', function() {
    mainCardPic.src = picturesSrc[i];
  })
}