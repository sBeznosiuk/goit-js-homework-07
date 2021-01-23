const inputRef = document.querySelector('#validation-input');



// inputRef.addEventListener('blur', e => {
//     const dataAttribute = inputRef.getAttribute('data-length')
//     const currentValue = e.target.value

//     if (currentValue.length == dataAttribute) {
//         inputRef.classList.add('valid')
//         inputRef.classList.remove('invalid')
//     }
    
//     if (currentValue.length != dataAttribute) {
//         inputRef.classList.add('invalid')
//         inputRef.classList.remove('valid')
//     }
// })

// inputRef.addEventListener('input', e => {
//         inputRef.classList.remove('valid', 'invalid')
// })


inputRef.addEventListener('input', handleInputClasses)
inputRef.addEventListener('blur', handleInputValidation)

function handleInputClasses({ target }) {
    target.classList.remove('valid', 'invalid')
}

function handleInputValidation ({ target }) {
    const dataAttribute = inputRef.getAttribute('data-length')
    const { value } = target;

    if (value.length == dataAttribute) {
        target.classList.add('valid')
        target.classList.remove('invalid')
    }
    
    if (value.length != dataAttribute) {
        target.classList.add('invalid')
        target.classList.remove('valid')
    }
}