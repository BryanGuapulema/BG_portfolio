'use strict';

// Contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  // Escuchar cambios en todos los inputs
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      // Habilitar botón solo si el formulario es válido
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  });

  // Opcional: prevenir envío real si quieres manejarlo por JS
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensaje enviado con éxito!');
    form.reset();
    formBtn.setAttribute('disabled', '');
  });
}
