'use strict';

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Función para activar una página
const activatePage = (pageName) => {
  pages.forEach((page, index) => {
    if (page.dataset.page === pageName) {
      page.classList.add('active');
      navigationLinks[index].classList.add('active');
    } else {
      page.classList.remove('active');
      navigationLinks[index].classList.remove('active');
    }
  });
};

// Activar página por defecto al cargar
window.addEventListener('DOMContentLoaded', () => {
  activatePage('about'); // About como página por defecto
});

// Agregar evento click a cada enlace de navegación
navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    const pageName = link.innerText.toLowerCase();
    activatePage(pageName);
    window.scrollTo(0, 0);
  });
});
