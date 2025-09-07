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
  link.addEventListener('click', function () {
    const targetPage = this.dataset.page;

    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    navigationLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');

    window.scrollTo(0, 0);
  });
});
