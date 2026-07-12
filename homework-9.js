const myForm = document.getElementById('subscribe-form');
const myEmail = document.getElementById('subscribe-email');

myForm.addEventListener('submit' , function(event) {
  event.preventDefault();

  if (!myEmail.checkVisibility()) {
    alert('Пожалуйста, введите корректный email!');
    return;
  }
  const data = {
    email: myEmail.value
  };

  console.log(data);
});

const openModalBtn = document.getElementById('open-register-modal');
const closeModalBtn = document.getElementById('close-register-modal');
const modalOverlay = document.getElementById('modal-overlay');

function openModal() {
  modalOverlay.classList.add('modal-showed');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('modal-showed');
  document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modalOverlay.classList.contains('modal-showed')) {
    closeModal();
  }
});


let user = null;

const registerForm = document.getElementById('register-form');
const passwordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('reg-password-confirm');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();


  if (!registerForm.checkValidity()) {
    alert('Регистрация отклонена. Пожалуйста, заполните все поля корректно.');
    return;
  }


  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Регистрация отклонена. Пароли не совпадают!');
    return;
  }


  user = {
    firstname: document.getElementById('reg-firstname').value,
    lastname: document.getElementById('reg-lastname').value,
    birthdate: document.getElementById('reg-birthdate').value,
    login: document.getElementById('reg-login').value,
    password: passwordInput.value,
    createdOn: new Date()
  };


  console.log('Пользователь успешно зарегистрирован:', user);

  registerForm.reset();
  closeModal();
});
