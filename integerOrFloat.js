function integerOrFloat(firstNumber, secondNumber, thirdNumber) {
    sum = firstNumber + secondNumber + thirdNumber;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';

    console.log(sum);
}

integerOrFloat(100, 200, 303);