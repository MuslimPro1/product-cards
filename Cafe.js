export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Добро пожаловать в кафе "${this.name}"! Мы находимся по адресу: ${this.location}.`;
  }

  orderDrink(drinkInstance) {
    console.log(`[Заказ] Поступил заказ в кафе "${this.name}" на напиток: ${drinkInstance.name}.`);
    drinkInstance.serve();
  }
}
