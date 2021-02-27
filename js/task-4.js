const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('span');

let count = 0;

const onIncrementButtonClick = () => { 
  count += 1;
  counterEl.innerText = count;
}
const onDecrementButtonClick = () => { 
  count -= 1;
  counterEl.innerText = count;
  
}

decrementBtnEl.addEventListener('click', onDecrementButtonClick)
incrementBtnEl.addEventListener('click', onIncrementButtonClick)