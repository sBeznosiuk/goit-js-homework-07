const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории`)

const itemsElements = items.forEach(item => {
    const itemCategory = item.querySelector('ul')
    
    console.log (`Категория: ${item.querySelector('h2').textContent}, Количество элементов: ${itemCategory.children.length}`)
})