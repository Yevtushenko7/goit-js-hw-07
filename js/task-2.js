const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ulEl = document.querySelector('#ingredients')

const createListItems = ingredients => { 
  return ingredients.map(item => { 
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem
  })
  
}

const ingredientsList = createListItems(ingredients)
ulEl.append(...ingredientsList)