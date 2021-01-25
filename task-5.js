const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

// inputRef.addEventListener('input', (e) => {
//     const textValue = e.target.value;
    
//     textValue ? spanRef.textContent = textValue : spanRef.textContent = 'незнакомец'
// })

inputRef.addEventListener('input', handleInputValue)

function handleInputValue({ target }) {
    !target.value ? spanRef.textContent = 'незнакомец' : spanRef.textContent = target.value
}