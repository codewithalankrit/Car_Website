'use strict';
// Helper function to get select elements with type safety
function getSelectElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Select element with id ${id} not found`);
  }
  return element;
}
// Helper function to reset selects
function resetSelects(selects) {
  selects.forEach(select => {
    select.value = '';
    select.disabled = true;
  });
}
// Helper function to update company options
function updateCompanyOptions(year) {
  const makeSelect = getSelectElement('makeSelect');
  // Clear existing options except the first one
  while (makeSelect.options.length > 1) {
    makeSelect.remove(1);
  }
  // Add new options based on year
  if (year === '2023') {
    const companies = ['Pagani', 'Lamborghini', 'Hennessey'];
    companies.forEach(company => {
      const option = document.createElement('option');
      option.value = company.toLowerCase();
      option.text = company;
      makeSelect.add(option);
    });
  } else if (year === '2024') {
    const companies = ['Ferrari', 'McLaren', 'Bugatti'];
    companies.forEach(company => {
      const option = document.createElement('option');
      option.value = company.toLowerCase();
      option.text = company;
      makeSelect.add(option);
    });
  } else if (year === '2025') {
    const companies = ['Koenigsegg', 'Rimac', 'Aston Martin'];
    companies.forEach(company => {
      const option = document.createElement('option');
      option.value = company.toLowerCase();
      option.text = company;
      makeSelect.add(option);
    });
  } else {
    // Default options for other years
    const companies = ['toyota', 'holden', 'maecedes-benz'];
    companies.forEach(company => {
      const option = document.createElement('option');
      option.value = company;
      option.text = company.charAt(0).toUpperCase() + company.slice(1);
      makeSelect.add(option);
    });
  }
}
// Helper function to update model options
function updateModelOptions(company) {
  const modelSelect = getSelectElement('modelSelect');
  // Clear existing options except the first one
  while (modelSelect.options.length > 1) {
    modelSelect.remove(1);
  }
  // Add new options based on company
  if (company === 'pagani') {
    const models = ['Utopia', 'Huayra BC'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'lamborghini') {
    const models = ['Aventador', 'Huracan', 'Urus'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase();
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'hennessey') {
    const models = ['Venom F5', 'Exorcist', 'Vehnom GT'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'ferrari') {
    const models = ['SF90 Stradale', '296 GTB', 'Purosangue'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'mclaren') {
    const models = ['Artura', '765LT', 'Senna'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase();
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'bugatti') {
    const models = ['Chiron', 'Divo', 'Centodieci'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase();
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'koenigsegg') {
    const models = ['Jesko', 'Gemera', 'Regera'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase();
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'rimac') {
    const models = ['Nevera', 'Concept One'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.text = model;
      modelSelect.add(option);
    });
  } else if (company === 'aston martin') {
    const models = ['Valkyrie', 'Vulcan', 'One-77'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.text = model;
      modelSelect.add(option);
    });
  } else {
    // Default options for other companies
    const models = ['kia-rio', 'mitsubishi', 'ford'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.text = model.charAt(0).toUpperCase() + model.slice(1).replace(/-/g, ' ');
      modelSelect.add(option);
    });
  }
}
// Helper function to update body style options
function updateBodyStyleOptions(model) {
  const styleSelect = getSelectElement('styleSelect');
  // Clear existing options except the first one
  while (styleSelect.options.length > 1) {
    styleSelect.remove(1);
  }
  // Add new options based on model
  if (model === 'utopia' || model === 'sf90-stradale' || model === 'jesko') {
    const styles = ['Coupe', 'Roadster', 'Targa'];
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style.toLowerCase();
      option.text = style;
      styleSelect.add(option);
    });
  } else if (model === 'huayra-bc' || model === 'artura' || model === 'nevera') {
    const styles = ['Coupe', 'Roadster'];
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style.toLowerCase();
      option.text = style;
      styleSelect.add(option);
    });
  } else if (model === 'chiron' || model === 'valkyrie') {
    const styles = ['Coupe', 'Roadster', 'Barchetta'];
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style.toLowerCase();
      option.text = style;
      styleSelect.add(option);
    });
  } else if (model === 'purosangue' || model === 'urus') {
    const styles = ['SUV', 'Crossover'];
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style.toLowerCase();
      option.text = style;
      styleSelect.add(option);
    });
  } else {
    // Default options for other models
    const styles = ['sedan', 'van', 'roadster'];
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style;
      option.text = style.charAt(0).toUpperCase() + style.slice(1);
      styleSelect.add(option);
    });
  }
}
// Helper function to update car condition options
function updateCarConditionOptions(style) {
  const conditionSelect = getSelectElement('conditionSelect');
  // Clear existing options except the first one
  while (conditionSelect.options.length > 1) {
    conditionSelect.remove(1);
  }
  // Add new options based on body style
  if (style === 'coupe' || style === 'roadster' || style === 'targa' || style === 'barchetta') {
    const conditions = ['Mint', 'Excellent', 'Good'];
    conditions.forEach(condition => {
      const option = document.createElement('option');
      option.value = condition.toLowerCase();
      option.text = condition;
      conditionSelect.add(option);
    });
  } else if (style === 'suv' || style === 'crossover') {
    const conditions = ['Perfect', 'Like New', 'Very Good'];
    conditions.forEach(condition => {
      const option = document.createElement('option');
      option.value = condition.toLowerCase().replace(/\s+/g, '-');
      option.text = condition;
      conditionSelect.add(option);
    });
  } else {
    // Default options for other styles
    const conditions = ['New', 'Used', 'Certified'];
    conditions.forEach(condition => {
      const option = document.createElement('option');
      option.value = condition.toLowerCase();
      option.text = condition;
      conditionSelect.add(option);
    });
  }
}
// Helper function to update price options
function updatePriceOptions(condition) {
  const priceSelect = getSelectElement('priceSelect');
  // Clear existing options except the first one
  while (priceSelect.options.length > 1) {
    priceSelect.remove(1);
  }
  // Add new options based on condition
  if (condition === 'mint' || condition === 'perfect') {
    const prices = ['$3,500,000', '$3,750,000', '$4,000,000'];
    prices.forEach(price => {
      const option = document.createElement('option');
      option.value = price;
      option.text = price;
      priceSelect.add(option);
    });
  } else if (condition === 'excellent' || condition === 'like-new') {
    const prices = ['$3,000,000', '$3,250,000', '$3,500,000'];
    prices.forEach(price => {
      const option = document.createElement('option');
      option.value = price;
      option.text = price;
      priceSelect.add(option);
    });
  } else if (condition === 'good' || condition === 'very-good') {
    const prices = ['$2,500,000', '$2,750,000', '$3,000,000'];
    prices.forEach(price => {
      const option = document.createElement('option');
      option.value = price;
      option.text = price;
      priceSelect.add(option);
    });
  } else {
    // Default options for other conditions
    const prices = ['$1,000,000', '$1,250,000', '$1,500,000'];
    prices.forEach(price => {
      const option = document.createElement('option');
      option.value = price;
      option.text = price;
      priceSelect.add(option);
    });
  }
}
function handleYearChange() {
  const yearSelect = getSelectElement('yearSelect');
  const styleSelect = getSelectElement('styleSelect');
  const makeSelect = getSelectElement('makeSelect');
  const conditionSelect = getSelectElement('conditionSelect');
  const modelSelect = getSelectElement('modelSelect');
  const priceSelect = getSelectElement('priceSelect');
  // Reset all dependent selects
  resetSelects([styleSelect, makeSelect, conditionSelect, modelSelect, priceSelect]);
  // Update company options based on selected year
  if (yearSelect.value !== '') {
    updateCompanyOptions(yearSelect.value);
    makeSelect.disabled = false;
  }
}
function handleMakeChange() {
  const yearSelect = getSelectElement('yearSelect');
  const styleSelect = getSelectElement('styleSelect');
  const makeSelect = getSelectElement('makeSelect');
  const conditionSelect = getSelectElement('conditionSelect');
  const modelSelect = getSelectElement('modelSelect');
  const priceSelect = getSelectElement('priceSelect');
  // Reset dependent selects
  resetSelects([styleSelect, conditionSelect, modelSelect, priceSelect]);
  // Update model options based on selected company and enable model select
  if (yearSelect.value !== '' && makeSelect.value !== '') {
    updateModelOptions(makeSelect.value);
    modelSelect.disabled = false;
  }
}
function handleModelChange() {
  const yearSelect = getSelectElement('yearSelect');
  const styleSelect = getSelectElement('styleSelect');
  const makeSelect = getSelectElement('makeSelect');
  const conditionSelect = getSelectElement('conditionSelect');
  const modelSelect = getSelectElement('modelSelect');
  const priceSelect = getSelectElement('priceSelect');
  // Reset remaining selects
  resetSelects([styleSelect, conditionSelect, priceSelect]);
  // Update body style options based on selected model and enable style select
  if (yearSelect.value !== '' && makeSelect.value !== '' && modelSelect.value !== '') {
    updateBodyStyleOptions(modelSelect.value);
    styleSelect.disabled = false;
  }
}
function handleStyleChange() {
  const yearSelect = getSelectElement('yearSelect');
  const styleSelect = getSelectElement('styleSelect');
  const makeSelect = getSelectElement('makeSelect');
  const conditionSelect = getSelectElement('conditionSelect');
  const modelSelect = getSelectElement('modelSelect');
  const priceSelect = getSelectElement('priceSelect');
  // Reset remaining selects
  resetSelects([conditionSelect, priceSelect]);
  // Update car condition options based on selected style and enable condition select
  if (
    yearSelect.value !== '' &&
    makeSelect.value !== '' &&
    modelSelect.value !== '' &&
    styleSelect.value !== ''
  ) {
    updateCarConditionOptions(styleSelect.value);
    conditionSelect.disabled = false;
  }
}
function handleConditionChange() {
  const yearSelect = getSelectElement('yearSelect');
  const styleSelect = getSelectElement('styleSelect');
  const makeSelect = getSelectElement('makeSelect');
  const conditionSelect = getSelectElement('conditionSelect');
  const modelSelect = getSelectElement('modelSelect');
  const priceSelect = getSelectElement('priceSelect');
  // Reset price select
  priceSelect.value = '';
  priceSelect.disabled = true;
  // Update price options based on selected condition and enable price select
  if (
    yearSelect.value !== '' &&
    makeSelect.value !== '' &&
    modelSelect.value !== '' &&
    styleSelect.value !== '' &&
    conditionSelect.value !== ''
  ) {
    updatePriceOptions(conditionSelect.value);
    priceSelect.disabled = false;
  }
}
//# sourceMappingURL=select-handler.js.map

// Initialize the select handlers when the document is ready
document.addEventListener('DOMContentLoaded', function () {
  const yearSelect = document.getElementById('yearSelect');
  const makeSelect = document.getElementById('makeSelect');
  const modelSelect = document.getElementById('modelSelect');
  const styleSelect = document.getElementById('styleSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const priceSelect = document.getElementById('priceSelect');

  if (yearSelect) yearSelect.addEventListener('change', handleYearChange);
  if (makeSelect) makeSelect.addEventListener('change', handleMakeChange);
  if (styleSelect) styleSelect.addEventListener('change', handleStyleChange);
  if (conditionSelect) conditionSelect.addEventListener('change', handleConditionChange);
  if (modelSelect) modelSelect.addEventListener('change', handleModelChange);
});

// Function to check if all required selects have a value
function validateSearchForm() {
  const yearSelect = document.getElementById('yearSelect');
  const styleSelect = document.getElementById('styleSelect');
  const makeSelect = document.getElementById('makeSelect');
  const conditionSelect = document.getElementById('conditionSelect');
  const modelSelect = document.getElementById('modelSelect');
  const priceSelect = document.getElementById('priceSelect');
  const searchButton = document.getElementById('searchButton');

  // Check if all selects have a value
  const allSelected =
    yearSelect.value &&
    styleSelect.value &&
    makeSelect.value &&
    conditionSelect.value &&
    modelSelect.value &&
    priceSelect.value;

  // Enable/disable search button based on selection
  searchButton.disabled = !allSelected;
}

// Add event listeners to all select elements
document.addEventListener('DOMContentLoaded', function () {
  const selects = [
    'yearSelect',
    'styleSelect',
    'makeSelect',
    'conditionSelect',
    'modelSelect',
    'priceSelect',
  ];

  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (select) {
      select.addEventListener('change', validateSearchForm);
    }
  });

  // Initial validation
  validateSearchForm();
});
