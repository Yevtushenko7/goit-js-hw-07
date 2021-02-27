const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInput = event => {
  event.target.value !== '' ? spanEl.textContent = event.target.value
    : spanEl.textContent = 'незнакомец'
  
 }
inputEl.addEventListener('input', onInput);