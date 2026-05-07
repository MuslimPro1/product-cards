import { socialMediaComments } from './comments.js';

// Уровень 1
// (2). Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers);

// (3). Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const kitchenUtensils = ['Ложка', 'Вилка', 'Нож', 'Чайник', 'Тостер'];
const hasToaster = kitchenUtensils.includes('Тостер');

console.log(hasToaster);

// (4). Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") .
// Два вышеуказанных массива с помощью этой функции перевернуть.
function reverseArray(arr) {
  return arr.reverse();
}

const reversedNumbers = reverseArray(filteredNumbers);
console.log('Перевернутые числа:', reversedNumbers);

const reversedUtensils = reverseArray(kitchenUtensils);
console.log('Перевернутые приборы:', reversedUtensils);

// Уровень 2
// (7). Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const filteredComments = socialMediaComments.filter(comment => comment.email.endsWith('.com'));

console.log(filteredComments);

// (8). Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const updatedComments = socialMediaComments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5? 2:1,
}));
console.log(updatedComments);

// (9). Перебрать массив, что бы объекты состояли только из айди и имени
const shortComments = socialMediaComments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log(shortComments);

// (10). Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const validatedComments = socialMediaComments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(validatedComments);

// Уровень 3:
// (11). Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const emailsByReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsByReduce);

const emailsByMap = socialMediaComments.map(comment => comment.email);

console.log(emailsByMap);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const emailString = getEmails.toString();
const emailStringByJoin = getEmails.join(", ");
