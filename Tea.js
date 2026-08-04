import { Drink } from './Drink.js';

export class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, hasHoney) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.hasHoney = hasHoney;
  }

  getInfo() {
    const honeyText = this.hasHoney ? "с мёдом" : "без мёда";
    return `${super.getInfo()} | Сорт чая: ${this.teaType} | ${honeyText}`;
  }
}
