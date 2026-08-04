import { Drink } from './Drink.js';

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, fruit, hasIce) {
    super(name, size, price, temperature);
    this.fruit = fruit;
    this.hasIce = hasIce;
  }

  getInfo() {
    const iceText = this.hasIce ? "со льдом" : "без льда";
    return `${super.getInfo()} | Вкус: ${this.fruit} | ${iceText}`;
  }
}
