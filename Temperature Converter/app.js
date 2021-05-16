const exchange = document.querySelector('#icon');
const formTemp = document.querySelector('#form-temp');

const iconB = document.querySelector('.icon-b')




formTemp.addEventListener('submit', (e) => {
    e.preventDefault();
    const celsiusInput = formTemp.elements.celTemp;
    const FahrenheitInput = formTemp.elements.fahTemp;
    // let celsiusNum = parseInt(celsiusInput.value);
    // let fahrenheitNum = parseInt(FahrenheitInput.value)
    calculate(parseInt(celsiusInput.value), parseInt(FahrenheitInput.value));
    celsiusInput.value = '';
    FahrenheitInput.value = '';
})
const calculate = (num1, num2) => {
    if (num1) {
        console.log(num1 * (9 / 5) + 32)
    }
    else if (num2) {
        console.log((num2 - 32) * 5 / 9)
    }

}


