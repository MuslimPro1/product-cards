// Базовый (родительский) класс для любой техники
class Device {
    // Конструктор — это функция, которая создает свойства у нового объекта
    constructor(brand, model, price) {
        this.brand = brand; // Марка (например, Apple)
        this.model = model; // Модель (например, iPhone 15)
        this.price = price; // Цена
    }

    // Общий метод для вывода информации, который будет у каждого устройства
    getInfo() {
        return `Устройство: ${this.brand} ${this.model}, Цена: ${this.price} ₽`;
    }
}

// Дочерний класс Смартфонов. Он автоматически забирает всё у Device
class Smartphone extends Device {
    constructor(brand, model, price, ram, battery) {
        // Слово super() вызывает конструктор родителя (Device) 
        // и передает ему brand, model, price, чтобы не дублировать код
        super(brand, model, price); 
        
        // А эти два свойства уникальны только для смартфонов:
        this.ram = ram;         // Оперативная память
        this.battery = battery; // Емкость батареи
    }

    // Переопределяем метод getInfo, чтобы он выводил больше деталей
    getInfo() {
        // Вызываем старый метод родителя через super.getInfo() и приклеиваем новые данные
        return `${super.getInfo()} | Память: ${this.ram} ГБ, Батарея: ${this.battery} мАч`;
    }
}

// Проверяем в консоли, как это работает:
const myPhone = new Smartphone("Apple", "iPhone 15", 90000, 8, 3349);
console.log(myPhone.getInfo());
// В консоли появится: Устройство: Apple iPhone 15, Цена: 90000 ₽ | Память: 8 ГБ, Батарея: 3349 мАч
