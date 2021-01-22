let counterValue = 0;

const decrementBtnRef = document.querySelector('.decrement')
const incrementBtnRef = document.querySelector('.increment')
const valueRef = document.querySelector('#value')


incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    console.log(counterValue)
    valueRef.textContent = counterValue
})

decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1
    console.log(counterValue)
    valueRef.textContent = counterValue
})

