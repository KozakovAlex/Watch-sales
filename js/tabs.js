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