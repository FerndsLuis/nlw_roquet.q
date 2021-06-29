import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check');
checkButtons.forEach((button) => {
  //adiciona a escuta em todos os botões desta cont
  button.addEventListener('click', handleClick);
});

//Abrir a modol no mobão excluir
const deleteButton = document.querySelectorAll('.actions a.delete');
deleteButton.forEach((button) => {
  button.addEventListener('click', () => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault(); // evita da "#" aparecer na URL ao clicar nos botões

  //Controle da rota da modal
  const roomId = document.querySelector('#room-id').dataset.id; //pega o ID da sala - usamos o Data-id
  const slug = check ? 'check' : 'delete'; //marcar como lido = true || como excluir = false ---- essa infor vem pela função
  const form = document.querySelector('.modal form');
  const questionId = event.target.dataset.id;

  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

  //check default caso null = true
  //abrir modal
  const text = (modalTitle.innerHTML = check ? 'Marca como lida' : 'Excluir');

  modalTitle.innerHTML = `${text} esta pergunta'`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
  check
    ? modalButton.classList.remove('red')
    : modalButton.classList.add('red');

  modal.open();
}
