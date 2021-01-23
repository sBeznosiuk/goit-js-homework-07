let counterValue = 0;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]')
const incrementBtnRef = document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector('#value')
valueRef.textContent = counterValue


// incrementBtnRef.addEventListener('click', () => {
//     counterValue += 1;
//     console.log(counterValue)
//     valueRef.textContent = counterValue
// })

// decrementBtnRef.addEventListener('click', () => {
//     counterValue -= 1
//     console.log(counterValue)
//     valueRef.textContent = counterValue
// })

incrementBtnRef.addEventListener('click', handleIncrement)
decrementBtnRef.addEventListener('click', handleDecrement)

function handleIncrement () {
    counterValue += 1;
    console.log(counterValue)
    valueRef.textContent = counterValue
}

function handleDecrement () {
    counterValue -= 1
    console.log(counterValue)
    valueRef.textContent = counterValue
}