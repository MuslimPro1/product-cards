export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создавать экземпляры абстрактного класса Drink напрямую.");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name} | Размер: ${this.size} | Цена: ${this.price} ₽`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
  }

  #prepare() {
    console.log(`[Процесс] Начинается приготовление напитка: ${this.name}...`);
  }

  serve() {
    this.#prepare();
    console.log(`[Готовка] Температура напитка в процессе: ${this.getTemperature()}°C`);
    console.log(`[Подача] Напиток ${this.name} (${this.size}) готов и подан! С вас ${this.price} ₽.`);
  }
}
