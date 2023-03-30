const btnPassword = document.getElementById('password-button');
const agrCheck = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const textCounter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const nameF = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const house = document.getElementById('house');
const subjects = document.getElementsByClassName('subject');
const main = document.querySelector('main');
const rate = document.querySelector('input[name=rate]:checked');
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

const getSubjects = () => {
  const arrayOfSubjects = [];

  Object.keys(subjects).forEach((key) => {
    if (subjects[key].checked) {
      arrayOfSubjects.push(subjects[key].value);
    }
  });
  return `${arrayOfSubjects.join(', ')}.`;
};

const formView = (event) => {
  const email = document.getElementById('input-email');

  event.preventDefault();
  evaluationForm.style.display = 'none';

  const formData = document.createElement('div');
  formData.id = 'form-data';

  formData.innerHTML = `<p>Nome: ${nameF.value} ${lastName.value}</p>
  <p>Email: ${email.value}</p>
  <p>Casa: ${house.value}</p>
  <p>Família: ${document.querySelector('input[name=family]:checked').value}</p>
  <p>Matérias: ${getSubjects()}</p>
  <p>Avaliação: ${rate.value}</p>
  <p>Observações: ${textArea.value}</p>`;

  main.appendChild(formData);
};

btnPassword.addEventListener('click', getLogin);
agrCheck.addEventListener('change', submitForm);
textArea.addEventListener('input', countInput);
evaluationForm.addEventListener('submit', formView);
