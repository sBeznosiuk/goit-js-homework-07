const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const list = document.querySelector('#ingredients')

// const items = ingredients.forEach(ingredient => {
//     const categoryRef = document.createElement('li')
//     console.log(categoryRef)

//     const titleRef = document.createElement('h2')
//     titleRef.textContent = ingredient;
//     // console.log(titleRef)

//     categoryRef.appendChild(titleRef)
//     // console.log(categoryRef)

//     list.appendChild(categoryRef)
// })
const listRef = document.querySelector('#ingredients');

function itemAdder(elements) {
    const addItems = elements.map(element => {
        const itemRef = document.createElement('li');
        console.log(itemRef)
        const titleRef = document.createElement('h2');
        titleRef.textContent = element;

        itemRef.appendChild(titleRef);

        return itemRef;

        
    })

    listRef.append(...addItems)
}

itemAdder(ingredients)



 
