window.addEventListener('load', start);

function start() {
  let email = document.querySelector('#room-email');
  let pass = document.querySelector('#room-pass');

  let errorUrl = location.search.slice(1);

  email.addEventListener('keyup', validateEmail);
  pass.addEventListener('keyup', validatePass);

  verifyError(errorUrl);
}

function validateEmail(event) {
  var txtEmail = event.target.value;
  let msgemail = document.querySelector('#msgemail');
  let isEmail;
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  isEmail = emailRegexp.test(txtEmail);

  if (!isEmail) {
    msgemail.innerHTML = `<p class="validateEmail">e-mail inválido</p>`;
  } else {
    msgemail.innerHTML = '';
  }
}

function validatePass(event) {
  var txtSenha = event.target.value;
  let msgsenha = document.querySelector('#msgsenha');

  if (txtSenha.length < 4) {
    msgsenha.innerHTML = `<p class="validatePass">senha inválida</p>`;
  } else {
    msgsenha.innerHTML = '';
  }
}

//valida erro vindo por parametros da url
function verifyError(errorUrl) {
  let msgemail = document.querySelector('#msgemail');
  let msgsenha = document.querySelector('#msgsenha');

  if (errorUrl == 'error') {
    msgemail.innerHTML = `<p class="validateEmail">E-mail inválido</p>`;
    msgsenha.innerHTML = `<p class="validatePass">Senha inválida</p>`;
  }
}
