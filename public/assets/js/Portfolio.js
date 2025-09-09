'use strict';

// Helper function para alternar clase
const elementToggleFunc = (elem) => elem.classList.toggle('active');

// Variables del select
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

// Variables para el modal
const modalContainer = document.querySelector('[data-modal-container]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');
const modalRepoBtn = document.querySelector('[data-modal-repo]');

// Toggle dropdown del select
if (select) {
  select.addEventListener('click', () => elementToggleFunc(select));
}

// Función de filtrado
const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === 'todo' || selectedValue === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// Click en items del select
selectItems.forEach(item => {
  item.addEventListener('click', function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Click en botones de filtrado
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove('active');
      this.classList.add('active');
      lastClickedBtn = this;
    });
  });
}

// Función para abrir/cerrar modal
const toggleModal = () => {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

// Abrir modal al click en proyecto
filterItems.forEach(project => {
  project.addEventListener('click', function (e) {
    e.preventDefault();

    // Información del proyecto
    const img = this.querySelector('img');
    const title = this.querySelector('.project-title').innerText;
    const category = this.querySelector('.project-category').innerText;
    const description = this.dataset.description || "Sin descripción disponible.";
    const repoLink = this.dataset.repo || '#';

    // Llenar modal
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.innerText = title;
    modalText.innerText = `Categoria: ${category} \n\n ${description}`;
    modalRepoBtn.href = repoLink;

    toggleModal();
  });
});

// Cerrar modal al click en overlay
overlay.addEventListener('click', toggleModal);
