function handleYearChange() {
  const yearSelect = document.getElementById('yearSelect');
  const styleSelect = document.getElementById('styleSelect');
  const makeSelect = document.getElementById('makeSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const modelSelect = document.getElementById('modelSelect');
  const priceSelect = document.getElementById('priceSelect');

  // Reset all dependent selects
  [styleSelect, makeSelect, conditionSelect, modelSelect, priceSelect].forEach(select => {
    select.value = '';
    select.disabled = true;
  });

  // Enable make select if year is selected
  if (yearSelect.value !== '') {
    makeSelect.disabled = false;
  }
}

function handleMakeChange() {
  const yearSelect = document.getElementById('yearSelect');
  const styleSelect = document.getElementById('styleSelect');
  const makeSelect = document.getElementById('makeSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const modelSelect = document.getElementById('modelSelect');
  const priceSelect = document.getElementById('priceSelect');

  // Reset dependent selects
  [styleSelect, conditionSelect, modelSelect, priceSelect].forEach(select => {
    select.value = '';
    select.disabled = true;
  });

  // Enable model select if both year and make are selected
  if (yearSelect.value !== '' && makeSelect.value !== '') {
    modelSelect.disabled = false;
  }
}

function handleModelChange() {
  const yearSelect = document.getElementById('yearSelect');
  const styleSelect = document.getElementById('styleSelect');
  const makeSelect = document.getElementById('makeSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const modelSelect = document.getElementById('modelSelect');
  const priceSelect = document.getElementById('priceSelect');

  // Reset remaining selects
  [styleSelect, conditionSelect, priceSelect].forEach(select => {
    select.value = '';
    select.disabled = true;
  });

  // Enable style select if year, make, and model are selected
  if (yearSelect.value !== '' && makeSelect.value !== '' && modelSelect.value !== '') {
    styleSelect.disabled = false;
  }
}

function handleStyleChange() {
  const yearSelect = document.getElementById('yearSelect');
  const styleSelect = document.getElementById('styleSelect');
  const makeSelect = document.getElementById('makeSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const modelSelect = document.getElementById('modelSelect');
  const priceSelect = document.getElementById('priceSelect');

  // Reset remaining selects
  [conditionSelect, priceSelect].forEach(select => {
    select.value = '';
    select.disabled = true;
  });

  // Enable condition select if year, make, model, and style are selected
  if (
    yearSelect.value !== '' &&
    makeSelect.value !== '' &&
    modelSelect.value !== '' &&
    styleSelect.value !== ''
  ) {
    conditionSelect.disabled = false;
  }
}

function handleConditionChange() {
  const yearSelect = document.getElementById('yearSelect');
  const styleSelect = document.getElementById('styleSelect');
  const makeSelect = document.getElementById('makeSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const modelSelect = document.getElementById('modelSelect');
  const priceSelect = document.getElementById('priceSelect');

  // Reset price select
  priceSelect.value = '';
  priceSelect.disabled = true;

  // Enable price select if all other selects are filled
  if (
    yearSelect.value !== '' &&
    makeSelect.value !== '' &&
    modelSelect.value !== '' &&
    styleSelect.value !== '' &&
    conditionSelect.value !== ''
  ) {
    priceSelect.disabled = false;
  }
}
