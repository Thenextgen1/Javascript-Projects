const exchange = document.querySelector('#icon');
const formTemp = document.querySelector('#form-temp');

const iconB = document.querySelector('.icon-b')




formTemp.addEventListener('submit', (e) => {
    e.preventDefault();
    const celsiusInput = formTemp.elements.celTemp;
    const FahrenheitInput = formTemp.elements.fahTemp;
    // let celsiusNum = parseInt(celsiusInput.value);
    // let fahrenheitNum = parseInt(FahrenheitInput.value)

    if (celsiusInput.value && typeof parseInt(celsiusInput.value === 'number')) {

        FahrenheitInput.value = calculate(parseInt(celsiusInput.value));
        celsiusInput.value = '';
    }
    else if (FahrenheitInput.value && typeof parseInt(FahrenheitInput.value === 'number')) {

        celsiusInput.value = calculate(undefined, parseInt(FahrenheitInput.value));
        FahrenheitInput.value = '';
    }
    else if (typeof celsiusInput.value === 'string' || typeof FahrenheitInput.value === 'number') {
        FahrenheitInput.value = '';
        celsiusInput.value = '';
    }

})
const calculate = (num1, num2) => {
    if (num1) {
        return num1 * (9 / 5) + 32;
    }
    else if (num2) {
        return (num2 - 32) * 5 / 9;
    }

}


