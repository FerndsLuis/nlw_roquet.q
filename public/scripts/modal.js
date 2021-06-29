export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const calcelButton = document.querySelector('.button.cancel');

  calcelButton.addEventListener('click', close);

  function open() {
    modalWrapper.classList.add('active'); //adiciona a classe active que faz o modal subir
  }

  function close() {
    modalWrapper.classList.remove('active');
  }

  return { open, close };
}
