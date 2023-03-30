const btnPassword = document.getElementById('password-button');
const agrCheck = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const textCounter = document.getElementById('counter');
btnSubmit.disabled = true;

const getLogin = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
};

const submitForm = () => {
  if (agrCheck.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};

const countInput = (event) => {
  let fixedNumbers = Number(textArea.maxLength);
  const newNumbers = Number(textArea.value.length);
  if (newNumbers >= fixedNumbers) {
    event.preventDefault();
  }
  fixedNumbers -= newNumbers;
  textCounter.innerHTML = fixedNumbers;
};

btnPassword.addEventListener('click', getLogin);
agrCheck.addEventListener('change', submitForm);
textArea.addEventListener('input', countInput);
