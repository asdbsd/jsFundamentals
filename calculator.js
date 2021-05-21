function calculator(num1, operator, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let operation = operator;
    let result = 0.00;

    switch(operator) {
        case '/': result = (firstNumber / secondNumber).toFixed(2); break;
        case '*': result = (firstNumber * secondNumber).toFixed(2); break;
        case '-': result = (firstNumber - secondNumber).toFixed(2); break;
        default:  result = (firstNumber + secondNumber).toFixed(2); break;
    }

    console.log(result);
}

calculator(25.5, '-', 3);