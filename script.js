// покраска первой карточки

console.log('hello world');

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0a0ac1';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
  console.log('firstProductCard.style');
});

// покраска всех карточек

const greenHashColor = 'rgb(8, 214, 80)';

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor);
});

// переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
};

// вывод содержмиого главного заголовка в консоль

const mainTitle = document.querySelector('div > h1');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

// Поменять цвет кнопки

const changeColorButton = document. getElementById('change-color-button');
changeColorButton.addEventListener('click', () => {
  const yellowHashColor = '#FFFF00';
  changeColorButton.style.backgroundColor = yellowHashColor;
});