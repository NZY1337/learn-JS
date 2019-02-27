let val1 = document.querySelector('#value1');
let val2 = document.querySelector('#value2');
let operator = document.querySelector('#operator');

let btnCalc = document.getElementById('calcFunc');
console.log(btnCalc);

calcFunction = () => {
    let output = document.querySelector('#output');
    let res;
    let num1 = Number(val1.value);
    let num2 = Number(val2.value);

    if (operator.value === '+') {
        res = num1 + num2;
        output.innerHTML = res;
    } else if (operator.value === '-') {
        res = num1 - num2;
        output.innerHTML = res;
    } else if (operator.value === '*') {
        res = num1 * num2;
        output.innerHTML = res;
    }  else if (operator.value === ':') {
        res = num1 / num2;
        output.innerHTML = res;
    }
    return res;
}



btnCalc.addEventListener('click', calcFunction);

