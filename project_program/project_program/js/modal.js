// MODAL
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeModalButton = document.querySelector('.modal_close');

let isModalShown = false; // Флаг для отслеживания открытия модального окна после скролла до конца страницы

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => event.target === modal && closeModal();

const showModalOnScroll = () => {
    if (!isModalShown && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        isModalShown = true;
        window.removeEventListener('scroll', showModalOnScroll); // Удаляем обработчик после открытия модального окна
    }
};

// Вызов модального окна через 10 секунд
setTimeout(() => {
    if (!isModalShown) {
        openModal();
        isModalShown = true;
        window.removeEventListener('scroll', showModalOnScroll); // Удаляем обработчик после открытия модального окна
    }
}, 10000);

window.addEventListener('scroll', showModalOnScroll);
