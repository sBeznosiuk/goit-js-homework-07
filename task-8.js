const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]')
const inputRef = document.querySelector('.js-input')
const divRef = document.querySelector('#boxes') 

btnRender.addEventListener('click', () => createBoxes(inputRef.value))
btnDestroy.addEventListener('click', destroyBoxes);

let defWidth = 20;
let defHeight = 20;

function createBoxes(amount) {

    const divArray = [];

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        console.log(box);

        defWidth += 10;
        defHeight += 10;
        
        box.style.width = `${defWidth}px`;
        box.style.height = `${defHeight}px`;
          
        box.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(Math.random() * (255 - 0) + 0)})`;

        divArray.push(box)
    }

    divRef.append(...divArray)
}

function destroyBoxes() {
    divRef.innerHTML = '';

    defHeight = 20;
    defWidth = 20;
}
