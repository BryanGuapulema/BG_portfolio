// About.js
'use strict';

// Variables del modal de testimonios
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// Variables del contenido del modal
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// Función para abrir/cerrar el modal
const testimonialsModalFunc = () => {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

// Agregar click a cada testimonial
testimonialsItem.forEach(item => {
  item.addEventListener('click', function () {
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
    modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

    testimonialsModalFunc();
  });
});

// Cerrar modal al click en el botón o overlay
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);
