function simpleCalculator(firstNumber, secondNumber, operator) {
    result = 0;

    switch(operator){
        case 'multiply' : result = firstNumber * secondNumber; break;
        case 'divide'   : result = firstNumber / secondNumber; break;
        case 'add'      : result = firstNumber + secondNumber; break;
        default         : result = firstNumber - secondNumber; break;
    }

    console.log(result);
}

simpleCalculator(5,5,'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'substract');