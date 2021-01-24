const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]')
const inputRef = document.querySelector('.js-input')
const divRef = document.querySelector('#boxes') 

inputRef.addEventListener('change', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {

    btnRender.addEventListener('click', () => {
        const box = document.createElement('div')
        divRef.appendChild(box)
        console.log(box);
        
        const children = divRef.childNodes;

        children.forEach((child, index) => {
              child.style.width = `${index * 10 + 30}px`
              child.style.height = `${index * 10 + 30}px`
        })
          
        box.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(Math.random() * (255 - 0) + 0)})`;
      })
    
}

function destroyBoxes() {
    while (divRef.firstChild) {
        divRef.removeChild(divRef.firstChild);
    } 
}
