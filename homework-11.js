import { Cafe } from './Cafe.js';
import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';
import { Lemonade } from './Lemonade.js';

const myCafe = new Cafe("Кофе и Точка", "ул. Пушкина, д. 10");
console.log(myCafe.getCafeInfo());

const espresso = new Coffee("Капучино", "М", 250, 85, "Арабика", "Овсяное");
const greenTea = new Tea("Зелёный Сенча", "L", 180, 80, "Крупнолистовой", true);
const berryLemonade = new Lemonade("Ягодный Микс", "L", 300, 5, "Клубника-Малина", true);

console.log(espresso.getInfo());
console.log(greenTea.getInfo());
console.log(berryLemonade.getInfo());

console.log("-----------------------------------");

myCafe.orderDrink(espresso);
console.log("-----------------------------------");
myCafe.orderDrink(greenTea);
console.log("-----------------------------------");
myCafe.orderDrink(berryLemonade);
