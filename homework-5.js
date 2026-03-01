// (3): Эта функция, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль.
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}
showWeather("Фергане", 20);

// (4): Создана константа в которой хранится скорость света.
// И функция которая принимает аргумент для сравнения.
const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if ( speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(10000000000000);
checkSpeed(10000);
checkSpeed(299792458);

// (5): Созданы переменные которые хранят в себе название и цену товара.
// И функция, которая сравнивает бюджет с ценой товара, с выводом соответствующего бюджету сообщения.
let productName = "Тандырная лепешка";
let productPrice = (100);

function purchaseProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретена. Спасибо за покупку!`);
  } else {
    const deficit = productPrice - budget;
    console.log(`Вам не хватает ${deficit}₽, пополните баланс.`);
  }
}
purchaseProduct(150);
purchaseProduct(90);