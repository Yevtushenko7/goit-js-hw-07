const inputEl = document.querySelector('#validation-input');
const validNumber = inputEl.getAttribute('data-length');

const onInputChange = act => {
    if(act.target.value.length === Number(validNumber)) {
        inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  } else { 
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')
  
    }
}

inputEl.addEventListener('change', onInputChange);