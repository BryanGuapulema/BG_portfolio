'use strict';

// Helper function para alternar clase
const elementToggleFunc = (elem) => elem.classList.toggle('active');

// Variables del select
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

// Toggle dropdown del select
if (select) {
  select.addEventListener('click', () => elementToggleFunc(select));
}

// Función de filtrado
const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
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
