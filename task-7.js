const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRef.addEventListener('input', handleInputChange);

function handleInputChange({ target }) {
    textRef.style.fontSize = `${target.value}px`;
}