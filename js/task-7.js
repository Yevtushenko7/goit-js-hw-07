const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInput = act => { 
 spanEl.style.fontSize = `${act.target.value}px`;
}

inputEl.addEventListener('input', onInput);