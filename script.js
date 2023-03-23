window.onload = () => {
  const btnSubmit = document.getElementById('password-button');

  const getLogin = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
      alert('Email ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  };

  btnSubmit.addEventListener('click', getLogin);
};
