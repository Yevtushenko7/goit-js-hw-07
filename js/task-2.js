const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ulEl = document.querySelector('#ingredients')
const createListItem = ingredients => { 
  ingredients.map(item => { 
    const listItem = document.createElement('li');
    listItem.textContent = item;
    ulEl.appendChild(listItem);
  })
}

createListItem(ingredients)