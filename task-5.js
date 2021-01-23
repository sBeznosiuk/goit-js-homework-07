const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

// inputRef.addEventListener('input', (e) => {
//     const textValue = e.target.value;
    
//     textValue ? spanRef.textContent = e.target.value : spanRef.textContent = 'незнакомец'
// })

inputRef.addEventListener('input', handleInputValue)

function handleInputValue({ target }) {
    const { value } = target

    value ? spanRef.textContent = value : spanRef.textContent = 'незнакомец';
}