// (3): создал объект на основе персональных данных
const userProfile = {
  firstName: "Виктор",
  lastName: "Протасов",
  email: "viktorprotasov1996@gmail.com",
  age: 29,
  country: "Россия",
  city: "Москва",
  relationshipStatus: "в браке",
  jobTitle: "Индивидуальный предприниматель",
  hobbies: "IT"
};
console.log(userProfile);

// (4): создал объект, с информацией об авто, с добавлением свойства "владелец", значение которого описано в пунке (3).
const vehicleDetails = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  color: "Space Gray",
  transmission: "автоматическая"
};

vehicleDetails.owner = userProfile;
console.log(vehicleDetails);

// (5): Написал функцию которая аргументом принимает объект, описанный в пункте (4).
//  Она проверяет, есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)
function addMaxSpeed(car) {
  if ("maxSpeed" in car) {
    return;
  }
  car.maxSpeed = 300;
}
addMaxSpeed(vehicleDetails);

// (6): Написал функцию, которая получает первым аргументом  — объект, 
// а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function showPropertyValue(obj, key) {
  console.log(obj[key]);
}
showPropertyValue(vehicleDetails, "brand");
showPropertyValue(vehicleDetails, "maxSpeed");

// (7): Создал массив, который содержит названия продуктов.
const groceryList = ["Яблоки", "Бананы", "Груши", "Мандарины", "Сок", "Хлеб", "Чай"];
console.log(groceryList);

// (8): Создал массив, состоящий из объектов, где объект представляет собой книгу 
// (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
// После, используя известный мне метод массив, добавил еще одну книгу в конец списка.
const library = [
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "коричневый",
    genre: "классика"
  },
  {
    title: "Автостопом по галактике",
    author: "Дуглас Адамс",
    year: 1979,
    coverColor: "синий",
    genre: "фантастика"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "красный",
    genre: "мистика"
  }
];

library.push({
  title: "Дюна",
  author: "Фрэнк Герберт",
  year: 1965,
  coverColor: "песочный",
  genre: "научная фантастика"
});
console.log(library);

// (9): Создал еще один массив, состоящих из книг, С помощью известного мне метода оператора, объединил эти два массива в один
const library2 = [
  {
    title: "Марсианин", 
    author: "Энди Уир", 
    year: 2011, 
    coverColor: "оранжевый", 
    genre: "научная фантастика"
  },
  {
    title: "Щегол",
    author: "Донна Тартт",
    year: 2013,
    coverColor: "бежевый",
    genre: "роман"
  },
];

const totalCollection = [...library, ...library2];

console.log(totalCollection);

// (10): Написал функцию, которая принимает массив сущностей с задания №9. Добавил новое свойство для объекта "isRare"
//и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. 
function markRareBooks(books) {
  books.forEach(book => {
    book.isRare = book.year > 2000;
  });
}
markRareBooks(totalCollection);
console.log(totalCollection);