import { Drink } from './Drink.js';

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()} | Зёрна: ${this.beansType} | Молоко: ${this.milkType}`;
  }
}
