import { Modal } from './Modal.js';
import { Form } from './Form.js';

class Device {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getInfo() {
    return `Устройство: ${this.brand} ${this.model}, Цена: ${this.price} ₽`;
  }
}

class Smartphone extends Device {
  constructor(brand, model, price, ram, battery) {
    super(brand, model, price);
    this.ram = ram;
    this.battery = battery;
  }

  getInfo() {
    return `${super.getInfo()} | Память: ${this.ram} ГБ, Батарея: ${this.battery} мАч`;
  }
}

const myPhone = new Smartphone("Apple", "iPhone 15", 90000, 8, 3349);
console.log(myPhone.getInfo());

const registerModal = new Modal('modal-overlay');
const registerForm = new Form('register-form');
const subscribeForm = new Form('subscribe-form');

const openModalBtn = document.getElementById('open-register-modal');
const modalOverlay = document.getElementById('modal-overlay');
const myFormEl = document.getElementById('subscribe-form');
const regFormEl = document.getElementById('register-form');
const passwordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('reg-password-confirm');

const recolorFirstCardBtn = document.getElementById('recolor-first-card-button');
const recolorAllCardBtn = document.getElementById('recolor-all-card-button');
const openGoogleBtn = document.getElementById('open-google-button');
const changeColorBtn = document.getElementById('change-color-button');

openModalBtn.addEventListener('click', () => {
  registerModal.open();
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    registerModal.close();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && registerModal.isOpen()) {
    registerModal.close();
  }
});

myFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeForm.isValid()) {
    alert('Пожалуйста, введите корректный email!');
    return;
  }

  const data = subscribeForm.getValues();
  console.log(data);
});

regFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registerForm.isValid()) {
    alert('Регистрация отклонена. Пожалуйста, заполните все поля корректно.');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Регистрация отклонена. Пароли не совпадают!');
    return;
  }

  const userData = registerForm.getValues();
  userData.createdOn = new Date();

  console.log('Пользователь успешно зарегистрирован через ООП архитектуру:', userData);

  registerForm.reset();
  registerModal.close();
});

recolorFirstCardBtn.addEventListener('click', () => {
  const firstCard = document.querySelector('.product-card');
  if (firstCard) {
    firstCard.style.backgroundColor = '#e0f7fa';
  }
});

recolorAllCardBtn.addEventListener('click', () => {
  const allCards = document.querySelectorAll('.product-card');
  allCards.forEach(card => {
    card.style.backgroundColor = '#ffe0b2';
  });
});

openGoogleBtn.addEventListener('click', () => {
  window.open('https://google.com', '_blank');
});

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.style.backgroundColor = '#4caf50';
  changeColorBtn.style.color = '#ffffff';
});
