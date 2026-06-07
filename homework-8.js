// (1). Как и в прошлых задания - создаем отдельный файл для homework-8 и подключаем его в HTML с атрибутом type = module (что бы работали импорты)
import { productCards } from "./product-cards.js";
const productCardWrapper = document.querySelector(".product-card-wrapper");
const productCardTemplate = document.querySelector(".product-card-temlate");

// (3). По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек. 
function renderProductCards(products) {
  products.map((card) => {
    const productClone = productCardTemplate.content.cloneNode(true);
    productClone.querySelector(".product-card__img").src =
      "images/" + card.ImageUrl + ".png";
    productClone.querySelector(".product-card__for-skin").textContent =
      card.typeSkin;
    productClone.querySelector(".product-card__title").textContent = card.name;
    productClone.querySelector(".product-card__description").textContent =
      card.description;
    card.composition.map((element) => {
      const li = document.createElement("li");
      const ul = productClone.querySelector(".product-card__composition-list");
      li.classList.add("product-card__item");
      li.textContent = element;
      ul.append(li);
    });
    productClone.querySelector(".product-card__price").textContent = card.price;
    productCardWrapper.append(productClone);
  });
}

// (4). Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
function getNameAndDesc(products) {
  return products.reduce((acc, element) => {
    return [...acc, { [element.name]: element.description }];
  }, []);
}

console.log(getNameAndDesc(productCards));

// (5). Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить?
// От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений
// (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить
// эти карточки (принимая массив аргументом)

const onLoad = () => {
  const numberCards = prompt("Сколько карточек отобразить?");
  const parsedNumber = parseInt(numberCards);

  if (!isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 5) {
    renderProductCards(productCards.slice(0, parsedNumber));
  } else {
    alert("Пожалуйста введите число от 1 до 5");
    window.location.reload();
  }
};

onLoad();
