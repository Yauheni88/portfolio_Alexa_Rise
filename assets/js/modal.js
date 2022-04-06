const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');
const nav = document.querySelector('[data-modal-menu]');

button.addEventListener('click', function() {
    modal.classList.remove('menu-close');
    nav.classList.remove('nav-close');
})

buttonClose.addEventListener('click', function() {
    modal.classList.add('menu-close');
    nav.classList.add('nav-close');
})

modal.addEventListener('click', function() {
    modal.classList.add('menu-close');
    nav.classList.add('nav-close');
})

nav.addEventListener('click', function(e) {
    e.stopPropagation();
})