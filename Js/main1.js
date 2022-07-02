const confirm = document.getElementById('js-enter')
const Modal = document.querySelector('.modal')
const ModalContainer = document.querySelector('.js-modal-container')
const closeModal = document.querySelector('.js-no')

function showModal() {
    Modal.classList.add('open')
}

confirm.addEventListener ('click', showModal);

Modal.addEventListener ('click', function closeModal() {
    Modal.classList.remove('open')
})
ModalContainer.addEventListener ('click', function (event) {
    event.stopPropagation()
})

closeModal.addEventListener ('click', function closeModal() {
    Modal.classList.remove('open')
})