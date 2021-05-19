function printAndSum(num1, num2) {
    let firstNumber = num1;
    let secondNumber = num2;
    let sum = 0;
    let allNumbers = "";

    for (firstNumber; firstNumber < secondNumber + 1; firstNumber++) {
        sum += firstNumber;
        allNumbers += firstNumber + " ";
    }
    console.log(allNumbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(50,60);